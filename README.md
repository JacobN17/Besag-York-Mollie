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

