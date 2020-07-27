import React, { useState } from 'react';
import '../css/navigation.css';

let csvFields = function toCsvFormat(str: string): string {
    const { Parser, transforms: { unwind } } = require('json2csv');
    let fields: string[] = [];
    
    if (str) {
        try {
            fields = getFields(str);
        } catch(e) {
            let area = document.getElementById('json') as HTMLInputElement;
            area.innerHTML = "Please check JSON formatting";
        }
    }

    const path = transformPath(fields);
    const transforms = [unwind({ paths: path })];
    
    try {
        const parser = new Parser({ fields, transforms });    
        const csv = parser.parse(JSON.parse(str));   
        let area = document.getElementById('json') as HTMLInputElement;
        area.innerHTML = csv;
    } catch (err) {
        // error
        console.error(err);
    }

    return str;
}


// this should trigger if they choose to download
function createCSV(): void {
    const { Parser, transforms: { unwind }} = require('json2csv');
    let textArea = document.getElementById('input') as HTMLInputElement;
    let data = textArea.value;
    let fields: string[] = [];
    if (data) {
        try {
            fields = getFields(data);
        } catch (e) {
            // error
            console.log("data to json failed");
        }
    }
    
    fields = fields.filter((item, index) => {
        return fields.indexOf(item) === index;
    })
    
    const path = transformPath(fields);
    const transforms = [unwind({ paths: path })];
    try {
        const parser = new Parser({fields, transforms});
        const csv = parser.parse(JSON.parse(data));   
        downloadCSV(csv);   
    } catch (err) {
        // error
    }
    
}

function transformPath(path: string[]) {
    let transform: string[] = [];

    for (let word of path) {
        let temp = word.split('.');
        if (temp.length > 1) {
            let newTemp = temp.slice(0, -1);
            if (newTemp.length > 1) {
                let start = newTemp.shift();
                if (start !== undefined) {
                    let result = start.concat(".", ...newTemp);
                    !transform.includes(result) ? transform.push(result) : console.log("duplicate");
                }
                
            } else if (!transform.includes(newTemp[0])) {
                transform.push(newTemp[0]);
            }
        }
    }

    return transform;    
}

function getFields(data: string): string[] {
    const { flatten } = require('flat');
    const regEx: RegExp = /\b[0-9]\./g;
    let obj: JSON = JSON.parse(data);
    let flatJSON = flatten(obj);
    let transformFields: string[] = [];
    
    Object.entries(flatJSON).forEach(([key,value]) => {
        if (!transformFields.includes(key.replace(regEx, ""))) {
            key = key.replace(regEx,"");
            if (key.match(/\.[0-9]$/)) {
                let updateKey = key.replace(/\.[0-9]$/,"");
                transformFields.push(updateKey);
            } else {
                transformFields.push(key.replace(regEx, ""));
            }
        }
    })

    let filteredFields = transformFields.filter((item, index) => transformFields.indexOf(item) === index);
    return filteredFields;
}



// dl function
// TODO: perform chunking
function downloadCSV(data: string): void {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob); //creates url version of csv
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href',url);
    a.setAttribute('download', 'download.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

export const Converter: React.FC = () => {    
    return (
        <div className="form-wrapper">
            <div className="input-field-div">
                <textarea id="input" className="json-area" placeholder="Paste JSON text here" onChange={ event => csvFields(event.target.value) }></textarea>
            </div>
            
            <div className="input-field-div">
                <textarea id="json" className="json-output" placeholder="Copy output or download csv file"></textarea>
            <div/>                    
            <button className="download-button" onClick={ createCSV }>download</button>
        </div>
        </div>
    )
}