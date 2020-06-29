import * as React from 'react';
import {useState} from 'react';
import {Dragndrop} from './dragndrop';
import '../css/upload.css';
import Papa, {ParseResult} from 'papaparse';
import $ from 'jquery';
// @ts-ignore
import TableToExcel from '@linways/table-to-excel';


export const Upload = () => {
    const [files, setFiles] = useState<File[]>([]);


    const onDrop = (acceptedFiles: File[]) => {
        acceptedFiles.map(file => (
            file
        ))
        console.log('File Dropped', setFiles(acceptedFiles))
    }


    const uploadFile = () => {
        const uploadURL = 'http://localhost:8080/fileupload';

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
                // Key data by field name instead of index/position
                header: true,
                // Converts numeric/boolean data
                dynamicTyping: true,
                complete: function (result) {
                    console.log(result)
                    displayParsedObject(result);
                }
            });
        })
    }

    //==== Generates html table from parsed csv file ====
    function displayParsedObject(papa: ParseResult<any>){
        let header = "";
        let tbody = "";
        for (const p in papa.meta.fields) {
            header += "<th>" + papa.meta.fields[p] + "</th>";
        }

        for (let i = 0; i < papa.data.length; i++) {
            let row = "";
            for (const z in papa.data[i]) {
                row += "<td>" + papa.data[i][z] + "</td>";
            }
            tbody += "<tr>" + row + "</tr>";
        }

        //build a table
        $("output").html(
            '<table class="table" id="csv-table"><thead>' +
            header +
            "</thead><tbody>" +
            tbody +
            "</tbody></table>"
        );
    }

    const csvFile = document.getElementById('csv-file') as HTMLInputElement;
    $(document).ready(function () {
        $(csvFile).change(uploadFile)
    });


    //==== Export CSV to Excel ====
    let exportBtn = document.getElementById("export-button") as HTMLTableElement;
    if (exportBtn) {
        exportBtn.addEventListener("click",  ev => {
            let csvtable = document.getElementById("csv-table") as HTMLInputElement;
            TableToExcel.convert(csvtable);
        })
    }


    return (
        <div>
            <output/>
            <button id="export-button">Export to Excel</button>
            <Dragndrop files={files} onDrop={onDrop}/>
            <img className="drag-icon" src="https://img.icons8.com/cotton/64/000000/upload-to-cloud--v1.png"
                 alt="cloud-img"/>
            <button className="upload-btn" value="Submit" onClick={() => uploadFile()}>Upload</button>
        </div>
    );
}