# Besag-York-Mollie

The BYM Model is a lognormal Poisson distribution developed for disease-risk mapping which includes both an Integrated Conditional Auto-Regression Model (ICAR) component for spatial smoothing and an ordinary random effects component for non-spatial heterogeneity. It is used to project statistical findings in order to analyze the degree of risk and discern details about the provided dataset. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
The following are software packages/dependencies needed to fully generate the interactive UI and BYM Model itself

Python</br>

	pip - Package manager for installing software packages for Python
	pystan - Used to interface between Stan and Python to 
	arviz - Used for exploratory analysis of Bayesian models 
	numpy - Library for high level mathematics on arrays and support for matrices
	pandas - Library for data manipulation and analysis
	pathlib - Used for object-orientated filepaths
	random - Used for generating pseudo-random numbers

The software packages can all be downloaded locally using the package manager pip within a command line prompt.
```
pip install pystan
```

Node.js
The initialize command will download a package.json file to include all of the necessary dependencies 
```
npm init
```

### Installing

A step by step series of examples that tell you how to get a development env running

Simply download the zip file from this repo and run the application. From there, have a dataset ready, such as a .csv file, and open the application

```
Picture
```

After successfully opening the application, proceed to the drag and drop cell and upload the desired dataset.

![Upload Button]
(docs/Screen Shot 2020-07-13 at 3.42.43 PM.png)

## Authors
 UI/Design\
	Aaron Yanes\
	Daniel Antonelli\
Database/API\
	Cameron Warren\
	Brandon Eldrige\
	Rigoberto Gonzalez\
BYM Model Functionality\
	Jacob John Nona

