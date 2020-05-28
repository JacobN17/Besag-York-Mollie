import * as React from 'react';
import '../css/upload.css';
import axios  from 'axios'



interface FormProps {
    action: string
}



function UploadFile() {
    const file = document.getElementById("file") as HTMLInputElement;
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


export const Upload: React.FC<FormProps> = ({action}) => {
    return (
        <div className="input-container">
            <form className="form-wrapper">
                <button className="file-chooser-button" type="button">
                    Choose File
                    <input className="file-input" type="file" name="file" accept={".csv"}/>
                </button>

                <button className="upload-button" type="submit" onClick={UploadFile}>
                    Submit
                </button>
            </form>
        </div>
    )
}
