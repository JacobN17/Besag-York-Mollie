import * as React from 'react';
import '../css/home.css';
import axios  from 'axios'
import { eventNames } from 'cluster';

interface FormProps {
    action: string
}

function UploadFile() {
    const file = document.getElementById("fileupload") as HTMLInputElement;
    if (file.files != null) {
        const formData = new FormData();
        formData.append("file", file.files[0]);
        axios.post("http://localhost:8080/", formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
            .then(response => {
                if (response.data != null) {
                    alert("SUCCESS")
                }
            });
    }
}



export const Home: React.FC<FormProps> = ({action}) => {
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

