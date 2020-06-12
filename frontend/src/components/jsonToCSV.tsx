import React, { useState } from 'react';
import '../css/home.css';
import '../css/converter.css';

function toCsvFormat(str: string): string[] {
    const { Parser } = require('json2csv');
    let fields: string[] = [];
    
    let obj: JSON = JSON.parse(str);
    Object.entries(obj).forEach(([key,value]) => {
        for (let v in value) {
            fields.push(v);
        }
    })
    
    // filter here
    fields = fields.filter((item, index) => {
        return fields.indexOf(item) === index;
    });

    const opts = { fields };

    try {
        const parser = new Parser(opts);
        const csv = parser.parse(JSON.parse(str));      
        let area = document.getElementById('json') as HTMLInputElement;
        area.innerHTML = csv;
    } catch (err) {
        //TODO: post error on front end
      console.error(err);
    }

    return fields;
}

// this should trigger if they choose to download
function downloadCSV(csvFields: string[]) {
    
}




export const Converter: React.FC = () => {
    const [textArea, setTextArea] = useState("");

    return (
        <div className="input-container">
            <div className="form-wrapper">
                <label>take in json</label>
                <br />
                <textarea className="json-area" onChange={event => toCsvFormat(event.target.value)}></textarea>
                <br />
                <label>output csv file to download</label>
                <br />
                <textarea id="json" className="json-output"></textarea>
                <button>download csv</button>
            </div>
        </div>
    )
}