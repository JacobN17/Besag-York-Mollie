import * as React from 'react';
import '../css/home.css';





export const Home: React.FC = () => {
    return (
        <div className='home-nav'>
            <p className='para-style1'>
                Welcome to the Besag-York-Mollie (BYM) landing page. This is the front-end application for
                BYM Model which is a lognormal Poisson distribution.
                To get started simply navigate to the upload tab
                and drag n drop or click to upload a file. Make sure that the file is a valid CSV file for it to work
                properly. You can also use the BYM tab to manually store additional dataset.
                For additional information about this project you can visit the github repository here
                <a className="hyper-link" href="https://github.com/JacobN17/Besag-York-Mollie"> Besag-York-Mollie </a>
            </p>
        </div>
    )
}

