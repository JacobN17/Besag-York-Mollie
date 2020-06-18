import * as React from 'react';
import { useState, } from 'react';
import {Dragndrop} from './dragndrop';
import '../css/upload.css';
import Papa from 'papaparse';




export const Upload = () => {
    const [files, setFiles] = useState<File[]>([]);

    const displayFile = files.map(file => (
        <li key={file.type}>
            {file.name} - {file.size} bytes
        </li>
    ));

    const onDrop = (acceptedFiles: File[]) => {
        acceptedFiles.map(file => (
            file
        ))
        console.log('File Dropped', setFiles(acceptedFiles))
    }


    const uploadFile = () => {
        const uploadURL = 'http://localhost:8080/upload';

        files.forEach(file => {
            const formData = new FormData();
            console.log(setFiles(files))
            formData.append('file', file);

            fetch(uploadURL, {
                method: 'post',
                body: formData
            }).then(response => {
                if (response.ok) {
                    console.log(response.headers)
                    alert("File uploaded successfully.")
                }
            }).catch(error => console.log(error, 'Error Could not Upload File'))

            //==== Parse CSV File ====
            Papa.parse(file, {
                delimiter: "",
                complete: updateData,
                header: true
            })
        })
    }

    const updateData = (result: { data: any; }) => {
        const data = result.data;
        console.log(data);
    }

    //TODO Post call to store data into db

    //TODO GET call data from db table

    return (
        <div>
            <Dragndrop files={files} onDrop={onDrop}/>
            <img className="drag-icon" src="https://img.icons8.com/cotton/64/000000/upload-to-cloud--v1.png"
                 alt="cloud-img"/>
            <button className="upload-btn" value="Submit" onClick={() => uploadFile()}>Upload</button>
            <aside className="display-uploaded-file">
                <ul>{displayFile}</ul>
            </aside>
        </div>
    );
}
