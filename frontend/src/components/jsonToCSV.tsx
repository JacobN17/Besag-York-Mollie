import React, { useState } from 'react';
import '../css/home.css';
import '../css/converter.css';

// TODO: 
// REFACTOR CODE
// HANDLE NESTED JSON FILES

let csvFields = function toCsvFormat(str: string): string {
    const { Parser, transforms: { unwind } } = require('json2csv');
    
    let fields: string[] = [];
    if (str) {
        try {
            let obj: JSON = JSON.parse(str);
            Object.entries(obj).forEach(([key,value]) => {
                for (let v in value) {
                    fields.push(v);
                }
            })
        } catch(e) {
            let area = document.getElementById('json') as HTMLInputElement;
            area.innerHTML = "Please check JSON formatting";
        }
    }

    // find fields
    fields = fields.filter((item, index) => {
        return fields.indexOf(item) === index;
    });

    // find if there is anything to unwind
    let transformFields: string[] = [];
    let obj: JSON = JSON.parse(str);
    Object.entries(obj).forEach(([key, value]) => {
        Object.entries(value).forEach(([k, v]) => {
            if (typeof v === 'object' && v !== null && !transformFields.includes(k)) {
                transformFields.push(k); 
            }
        })
    })

    // TODO: HANDLE FOR ARRAYS GREATER THAN LENGTH 1
    const transforms = [unwind({paths: [transformFields[0]]})];
    const opts = { fields };

    try {
        const parser = new Parser({opts, transforms});
        const csv = parser.parse(JSON.parse(str));      
        let area = document.getElementById('json') as HTMLInputElement;
        area.innerHTML = csv;
    } catch (err) {
        // error
    }

    return str;
}


// this should trigger if they choose to download
function createCSV(): void {
    const { Parser } = require('json2csv');
    let textArea = document.getElementById('input') as HTMLInputElement;
    let data = textArea.value;
    let fields: string[] = [];
    if (data) {
        try {
            const objToJson: JSON = JSON.parse(data);
            Object.entries(objToJson).forEach(([key,value]) => {
                for (let v in value) {
                    fields.push(v);
                }
            })
        } catch (e) {
            // error
            console.log("data to json failed");
        }
    }

    fields = fields.filter((item, index) => {
        return fields.indexOf(item) === index;
    })

    const opts = { fields };
    try {
        const parser = new Parser(opts);
        const csv = parser.parse(JSON.parse(data));   
        downloadCSV(csv);   
    } catch (err) {
        // error
    }
    
}

// dl function
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
        <div className="input-container">
            <div className="form-wrapper">
                <label>take in json</label>
                <br />
                <textarea id="input" className="json-area" onChange={event => csvFields(event.target.value)}></textarea>
                <br />
                <label>output csv file to download</label>
                <br />
                <textarea id="json" className="json-output"></textarea>
                <button onClick={createCSV}>download csv</button>
            </div>
        </div>
    )
}