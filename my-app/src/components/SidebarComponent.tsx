import React from 'react';
<<<<<<< HEAD
import { relative } from 'path';
import '/App.css';
=======
import './SidebarComponent.css';
// import { relative } from 'path';
// import './App.css';
>>>>>>> daniel

// when upload tab is pressed do this stuff
//create an upload side nav bar that sites below main navigation
//pops up specific side nav items depending on the tab clicked

interface FormProps {
    action: string; // python path
}

<<<<<<< HEAD
//TODO: STYLE UPLOAD COMPONENT


export const SidebarComponent: React.FC<FormProps> = ({ action }) => {
    return (
        <div className="upload-form upload-btn-wrapper">
            <form action={ action } encType="multipart/form-data">
                <input type="file" id="myFile" name="filename" />
                <input type="submit" />
            </form>
        </div>
    )
}
=======

export const SidebarComponent: React.FC<FormProps> = ({ action }) => {
// export const SidebarComponent: React.FC = (): JSX.Element =>
    return (
        <div className="input-container"> 
            <form className="form-wrapper" action={ action } encType="multipart/form-data">
                <input className="btn-file" type="file"  id="myFile" name="filename" />
                <input className="submit" type="submit" />
            </form>
        </div>

        // <div className="upload-wrapper">
        //     <form className="form" action={ action } encType="multipart/form-data">
        //     {/* <form className="form"> */}
        //         <button className="file-option" type="button">
        //             Choose File
        //             <input type="file" name="file"/>
        //             {/* <input className="file-input" type="file" name="file" /> */}
        //         </button>

        //         <button className="upload-button" type="submit">
        //             Submit
        //         </button>
        //     </form>
        // </div>
    )
}

>>>>>>> daniel
