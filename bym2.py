"""
Author: Jacob John Nona
Program that generates the Besag-York-Mollie 2 model, a lognormal Poisson distribution
developed for disease-risk mapping which includes both an
Integrated Conditional Auto-Regression Model (ICAR) component for spatial smoothing
and an ordinary random effects component for non-spatial heterogeneity.
 """
import os
import csv
import shutil
import pystan
import pathlib
import arviz as ar
import numpy as np
import pandas as pd
import random as r
import folium as f
from statistics import mean


def generate_model(data_file):
    read_file = pd.read_csv(data_file)  # reads csv file and scans for lat & lon columns
    N = len(read_file.values)  # number of latitude || longitude coordinates
    edges = N  # number of edges, also equal to N of dataset
    K = 1  # represents the coordinate pairs
    scaling_factor = 2.0  # factor of two for variance consistency
    node1 = []  # list of indices
    node2 = []
    y1 = []  # number of outcomes appended using random
    for i in range(N):
        rand = r.randint(1, 2)
        y1.append(rand)
        node1.append(rand)
        node2.append(rand)
    design_matrix = []
    for val in read_file.values:
        design_matrix.append([val[1]])  # matrix with coordinate pair as each array listing

    # stan code block for the data and parameters
    stan_code = """
    functions {
        real icar_normal_lpdf(vector phi, int N, int[] node1, int[] node2){
            return -0.5 * dot_self(phi[node1] - phi[node2]) + normal_lpdf(sum(phi) | 0, 0.001 * N);
        }
    }
        
    data {
        int<lower=0> N;
        int<lower=0> edges;
        int<lower=1, upper=N> node1[edges];
        int<lower=1, upper=N> node2[edges];
        real<lower=0> scaling_factor;
        int<lower=1> K;
        int<lower=0> y[N];
        matrix[N, K] x;
    }
        
    parameters {
        real beta0;
        vector[K] betas;
        real logit_rho;
        vector[N] phi;
        vector[N] theta;
        real<lower=0> sigma;
    }
        
    transformed parameters {
        real<lower=0, upper=1> rho = inv_logit(logit_rho);
        vector[N] convolved_re = sqrt(rho / scaling_factor) * phi + sqrt(1 - rho) * theta;
    }
        
    model {
        y ~ poisson_log(beta0 + x * betas + convolved_re * sigma);
        beta0 ~ normal(0, 1);
        betas ~ normal(0, 1);
        logit_rho ~ normal(0, 1);
        sigma ~ normal(0, 1);
        theta ~ normal(0, 1);
        phi ~ icar_normal_lpdf(N, node1, node2);
    }
    """

    # model data initialization

    bym_data = {
        'N': N,  # size of the graph = number of values in csv
        'edges': edges,  # edge sets representing relations
        'node1': node1,  # set of indices corresponding to 1st component(i) of ICAR
        'node2': node2,  # set of indices corresponding to 2nd component(j) of ICAR
        'scaling_factor': scaling_factor,  # variance between spatial points
        'K': K,  # number of covariates
        'y': y1,  # number of outcomes
        'x': np.array(design_matrix)  # matrix for design of the structure of graph
    }

    # Utilize pystan package to allow the built-in StanModel class to fully generate a model and arviz to plot
    sm = pystan.StanModel(model_code=stan_code)
    fit = sm.sampling(data=bym_data, iter=1000, chains=4, sample_file='results.csv')
    data_summary = pystan.stansummary(fit=fit, pars=None, probs=(0.5, 0.975), digits_summary=3)
    print(data_summary)
    ar.plot_density(fit, var_names=['beta0', 'betas', 'logit_rho', 'sigma', 'theta'])

    first_path = os.path.abspath('./' + 'results_0.csv')
    new_path = os.path.abspath('fitted_data/')
    shutil.move(first_path, new_path + '/' + 'results_0.csv')

    betas = []
    df = pd.read_csv('fitted_data/results_0.csv', usecols=['beta0'], comment='#')
    numbers = df.iloc[:, 0].values
    for num in numbers:
        betas.append(num)

    usa = []
    sf = pd.read_csv('datasets/us_unemployment_2012.csv', usecols=['State'])
    states = sf.iloc[:, 0].values
    for state in states:
        usa.append(state)

    with open('mod_results.csv', 'w', newline='') as newFile:
        newFileWriter = csv.writer(newFile)
        newFileWriter.writerow(["State", "Rate"])
        for i in range(len(usa)):
            newFileWriter.writerow(([usa[i], betas[i]]))


def generate_map(geo_file, data_file, col, color, legend, html):
    geo_path = os.path.join(geo_file)
    data_path = os.path.join(data_file)

    data_read = pd.read_csv(data_path, usecols=col)

    m = f.Map(location=[37, -102], zoom_start=5)

    # Add the color for the chloropleth:
    m.choropleth(
        geo_data=geo_path,
        name='choropleth',
        data=data_read,
        columns=col,
        key_on='feature.id',
        fill_color=color,
        fill_opacity=0.7,
        line_opacity=0.2,
        legend_name=legend
    )
    f.LayerControl().add_to(m)

    # Save to html
    m.save(html)
    first_path = os.path.abspath('./' + html)
    new_path = os.path.abspath('./templates/')
    shutil.move(first_path, new_path + '/' + html)
    return html
