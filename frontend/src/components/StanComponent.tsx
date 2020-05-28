import React, { SyntheticEvent, useState, useEffect } from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import './SidebarComponent.css';



interface StanProps {
    action: string
}

export const StanComponent: React.FC<StanProps> = ({action}) => {
    return (
        <Formik initialValues={{ data: '', dataValues: '', mean: '', sd: '' }}
        onSubmit = {data => {
            console.log(data);
        }}
        >
        {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
        }) => (
            <div className="input-container">
                <form onSubmit={handleSubmit} className="form-wrapper" action="/upload" encType="multipart/form-data" method="POST">
                
                    <label>Data</label>
                    <input
                        type="number"
                        name="data"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.data}
                    />
                    
                    <label>Values</label>
                    <input     
                        type="number"
                        name="dataValues"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.dataValues}                
                    />


                    <label>Mean</label>
                    <input
                        type="number"
                        name="mean"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.mean}
                    />

                    <label>Standard Deviation</label>
                    <input
                        type="number"
                        name="sd"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.sd}
                    />
                
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                    <pre>{JSON.stringify(values,null,2)}</pre>
                </form>
            </div>
        )}
        </Formik>
    )
}