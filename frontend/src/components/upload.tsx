import * as React from 'react';
import {useState} from 'react';
import {Dragndrop} from './dragndrop';
import '../css/upload.css';
import Papa, {ParseResult} from 'papaparse';
import $ from 'jquery';
// @ts-ignore
import TableToExcel from '@linways/table-to-excel';
import * as XLSX from 'xlsx';


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
                header: true,           // Key data by field name instead of index/position
                dynamicTyping: true,    // Converts numeric/boolean data
                complete: (result: any) => {
                    console.log(result)
                    displayParsedObject(result);
                }
            });
        })
    }

    /**
     * Generates html table from parsed csv file
     * @param papa file object to be parsed
     */
    function displayParsedObject(papa: ParseResult<any>) {
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
            header + "</thead><tbody>" +
            tbody +  "</tbody></table>"
        );
    }

    const csvFile = document.getElementById('dropped-file') as HTMLInputElement;
    if (csvFile) {
        csvFile.addEventListener("click", ev => {
            $(csvFile).change(uploadFile)
        })
    }

    //==== Export CSV to Excel ====
    let exportBtn = document.getElementById("export-button") as HTMLButtonElement;
    if (exportBtn) {
        exportBtn.addEventListener("click",  ev => {
            let csvTable = document.getElementById("csv-table") as HTMLTableElement;
            TableToExcel.convert(csvTable);
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