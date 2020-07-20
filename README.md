# Besag-York-Mollie

The Besag-York-Mollie (BYM) Model is a lognormal Poisson distribution developed for disease-risk mapping which includes both an Integrated Conditional Auto-Regression Model (ICAR) component for spatial smoothing and an ordinary random effects component for non-spatial heterogeneity. It is used to project statistical findings in order to analyze the degree of risk and discern details about the provided dataset. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
**NOTE**: ```npm``` ```node``` and ```pip``` will be needed for the installation portion

The following are software packages/dependencies needed to fully generate the interactive UI and BYM Model itself


### Installation

**Python**

	pip - Package manager for installing software packages for Python
	pystan - Used to interface to Stan
	arviz - Used for exploratory analysis of Bayesian models 
	numpy - Library for high level mathematics on arrays and support for matrices
	pandas - Library for data manipulation and analysis
	pathlib - Used for object-orientated filepaths
	random - Used for generating pseudo-random numbers

The software packages can all be downloaded locally using the package manager pip within a command line prompt such as the following.
```
pip install pystan
```

**Node**\
The initialize command will download a package.json file to include all of the necessary dependencies 
```
npm init
```

## Usage

A step by step series of examples that tell you how to get a development env running

Simply download the zip file from this repo and run the application. From there, have a dataset ready, such as a .csv file, and open the application

<img src ="docs/Screen%20Shot%202020-07-16%20at%201.09.45%20AM.png" width = "500">


After opening the application, click the upload button and proceed with uploading the desired dataset
<img src= "docs/Screen%20Shot%202020-07-13%20at%203.42.43%20PM.png" width= "400">

A set of coordinates will then be displayed, giving the results of the model generation such as the following
<img src= "docs/Screen%20Shot%202020-07-16%20at%201.10.16%20AM.png" width= "500">

The results of the iterations will be displayed. Here is an example of how the results would look with the variables .

<img src ="docs/Screen%20Shot%202020-07-19%20at%2010.46.40%20PM.png">


Now, these results represent different aspects of the Besag-York-Mollie Model . The model parameters that were displayed here are 
```
beta0
betas
sigma
theta
logit_rho
```

Within the Stan code itself, the parameters block is only for declarations. The actual constraints of these parameters are defined within the model block. 

- Beginning with ```beta0```, this is the initial intercept of the model itself. 

- The ```betas``` represent the various covariates associated with the model. Within this example, the covariates that were used were coordinate pairs of latitude and longitude, which means there's only two entries. Upon closer inspection, it can be seen that the betas slightly differ since there are multiple coordinate pairs that are very close in their number, but slightly off with their remaining significant figures. This can be numerically represented as ([-159.3963,21.97066], [-158.0274,21.34273]) for instance.

- ```sigma``` represents the overall standard deviation of the model, which is simply a measure of the disparity within whatever statisical model is presented. The graph is shown to have the distribution extremely skewed to the right in this specific iteration, indicating a positive alignment

- ```theta``` represents the spatial heterogeneous effects displayed in the model. This scopes out the data and illustrates the disparities of various concentrations given in a specific area within the region. This is usually in reference to a landscape or a population. As seen here with the example, they each have unique and different shapes. This is accounting for the general discrepanices found in the given dataset's regions.

- ```logit_rho```  is the proportional spatial variance of the model. This attributes to the spatial differences within the specific locations used within the model. 

**NOTE**: Each run will give a specific amount of saturation for the actual graph of the model __EACH TIME__. Use multiple runs for each dataset to be to discern the associated risks.



## Authors & Acknowledgement
 **UI & Design**
 - Aaron Yanes
 - Daniel Antonelli

**Database & API**
- Cameron Warren
- Brandon Aldridge
- Rigoberto Gonzalez

**BYM Model Functionality**
- Jacob John Nona



## Additional Sources & Research

**Stan**
- https://mc-stan.org/users/interfaces/stan


**Syntax Cheat Sheet for Stan**
- http://www.sumsar.net/files/posts/2017-bayesian-tutorial-exercises/stan_cheat_sheet2.12.pdf


**PyStan**
- https://towardsdatascience.com/an-introduction-to-bayesian-inference-in-pystan-c27078e58d53
- https://pystan.readthedocs.io/en/latest/
- https://people.duke.edu/~ccc14/sta-663/PyStan.html~Deprecated
- https://arviz-devs.github.io/arviz/notebooks/Introduction.html
- https://users.obs.carnegiescience.edu/cburns/ipynbs/PyStan.html


**Stan Implementation for BYM**
- http://www.stat.columbia.edu/~gelman/research/published/bym_article_SSTEproof.pdf


**R Implementation for BYM**
- http://www.r-inla.org/examples/volume-1/code-for-bym-example
- https://cran.r-project.org/web/packages/spam/vignettes/jss15.pdf


**Fitting CAR & SAR Models**
- http://www2.stat.duke.edu/~cr173/Sta444_Sp17/slides/Lec19.pdf


**Reference for mathematical terms and concepts(Scalar, Vectors, Tensors, etc)**
- https://zeus.plmsc.psu.edu/~manias/MatSE447/03_Tensors.pdf


**Reference for Markov Chains** 
- https://jeremykun.com/2015/04/06/markov-chain-monte-carlo-without-all-the-bullshit/
- http://www.math.chalmers.se/Stat/Grundutb/CTH/mve220/1617/redingprojects16-17/IntroMarkovChainsandApplications.pdf


**Video Reference for High Level Overview of Bayesian Hierarchical Models**
- https://youtube.com/watch?v=SMWleVKO9ZM


**Reference for USA represented as a Graph in Discrete Mathematics**
- https://mathworld.wolfram.com/ContiguousUSAGraph.html






