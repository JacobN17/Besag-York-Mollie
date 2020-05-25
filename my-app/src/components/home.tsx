import * as React from 'react';
import '../css/home.css';


interface FormProps {
    action: string;
}

export const Home: React.FC<FormProps> = ({action}) => {
    return (
        <div className="input-container">
            <form className="form-wrapper">
                <button className="file-chooser-button" type="button">
                    Choose File
                    <input className="file-input" type="file" name="file" />
                </button>

                <button className="upload-button" type="submit">
                    Sumbit
                </button>
            </form>
        </div>
    )
};
