import * as React from 'react';
import '../css/upload.css';






//TODO: fix opacitiy after file dropped

interface UploadProps {
    action: string
}

let onFileDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    let event = e;
    event.preventDefault()
    event.stopPropagation();
    let dropArea = document.getElementById("drop-area") as HTMLElement;
    dropArea.style.opacity = "0.5";
}

let onFileDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    let event = e;
    event.stopPropagation();
}

let onFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    let event = e;
    event.stopPropagation();

    console.log("file dropped");
    console.log(e.dataTransfer.items);

    // TODO: handle db requests in this method

}

export const Upload: React.FC<UploadProps> = ({ action }) => {
    return (
        <div className="input-container">
            <form className="form-wrapper">
                <div id="drop-area"
                     onDragOver={onFileDragOver}
                     onDragEnter={onFileDragEnter}
                     onDrop={onFileDrop} >
                    <img className="drag-icon" src="https://img.icons8.com/cotton/64/000000/upload-to-cloud--v1.png"
                    alt="cloud-img"/>
                    <p>Choose a file or drag here</p>
                    <input type="file" className="file-area"/>
                    <div className="btn">
                        <button className="upload-button" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}








