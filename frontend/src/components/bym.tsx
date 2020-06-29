import * as React from 'react';
import '../css/bym.css'
import {Formik} from "formik";
import axios  from 'axios'


interface FormProps {
    action: string;
}



function SubmitForm() {
    const file = document.getElementById("upload") as HTMLInputElement;
    if (file.files != null) {
        const formData = new FormData();
        formData.append("upload", file.files[0]);
        axios.post("http://localhost:8080/fileUpload", formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
            .then(response => {
                if (response.data != null) {
                    alert("SUCCESS")
                }
            });
    }
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
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.data}
                        />

                        <label htmlFor="value">Value</label>
                        <input
                            type="number"
                            name="dataValues"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.dataValues}
                        />


                        <label htmlFor="mean">Mean</label>
                        <input
                            type="number"
                            name="mean"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.mean}
                        />

                        <label htmlFor="std">Standard Deviation</label>
                        <input
                            type="number"
                            name="sd"
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
