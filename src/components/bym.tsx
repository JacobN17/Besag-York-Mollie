// import * as React from 'react';
//
// export const Bym: React.FC <{}> = () => {
//     return (
//         <div className="navbar-container">
//             <h1>BYM Page</h1>
//         </div>
//     )
// };

import * as React from 'react';
import './bym.css'



interface FormProps {
    action: string;
}

export const Bym: React.FC<FormProps> = ({action}) => {
    return (
        <div className="model-container">
            <form className="form-wrapper" action={action}>

                <label htmlFor="data">Data</label>
                <select id="data-input" name="data-input">
                    <option value="int<lower=1> N">N</option>
                    <option value="real y[N]">y[N]</option>
                </select>
                <select>
                    <option value="int<lower=1> N">N</option>
                    <option value="real y[N]">y[N]</option>
                </select>

                <label htmlFor="data">Parameter</label>
                <select id="para-input" name="para-input">
                    <option value="real mu">real mu</option>
                </select>

                <label htmlFor="data">Model</label>
                <select id="model-input" name="model-input">
                    <option value="mu ~ normalize(0, 10)">mu ~ normalize(0, 10)</option>
                    <option value=" y ~ normal(mu, 1)">y ~ normal(mu, 1)</option>
                </select>

                <select>
                    <option value="mu ~ normalize(0, 10)">mu ~ normalize(0, 10)</option>
                    <option value=" y ~ normal(mu, 1)">y ~ normal(mu, 1)</option>
                </select>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}
