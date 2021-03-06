import * as React from 'react';
import '../css/bym.css'
import { Formik } from "formik";
import axios from 'axios'


interface FormProps {
    action: string;
}


function SubmitForm() {
    const formData = new FormData();
    formData.set("data", (document.getElementById("dataw") as HTMLInputElement).value);
    formData.set("dataValues", (document.getElementById("dataValues") as HTMLInputElement).value);
    formData.set("mean", (document.getElementById("mean") as HTMLInputElement).value);
    formData.set("sd", (document.getElementById("sd") as HTMLInputElement).value);
    axios.post("http://localhost:8080/api/bym", formData, {
        headers: {'Content-Type': 'multipart/form-data'}
    })
        .then(response => {
            if (response.data != null) {
            }
        });
}


export const Bym: React.FC<FormProps> = ({action}) => {
    return (

        <Formik initialValues={{ data: '', dataValues: '', mean: '', sd: '' }}
                onSubmit = {data => {
                    console.log(data);
                }} >
            {({
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
              }) => (
                <div className="model-container">
                    <form onSubmit={handleSubmit} className="form" action="/upload"
                          encType="multipart/form-data" method="POST">

                        <label htmlFor="data">Data</label>
                        <input className="box"
                            type="number"
                            name="data"
                            id="dataw"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.data}
                        />

                        <label htmlFor="value">Value</label>
                        <input
                            type="number"
                            name="dataValues"
                            id="dataValues"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.dataValues}
                        />


                        <label htmlFor="mean">Mean</label>
                        <input
                            type="number"
                            name="mean"
                            id="mean"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.mean}
                        />

                        <label htmlFor="std">Standard Deviation</label>
                        <input
                            type="number"
                            name="sd"
                            id="sd"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.sd}
                        />

                        <input type="submit" value="Submit" disabled={isSubmitting} onClick={SubmitForm}/>
                        <pre>{JSON.stringify(values,null,2)}</pre>
                    </form>
                </div>
            )}
        </Formik>
    )
}
