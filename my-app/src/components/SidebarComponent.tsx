import React from 'react';
import { relative } from 'path';
import '/App.css';

// when upload tab is pressed do this stuff
//create an upload side nav bar that sites below main navigation
//pops up specific side nav items depending on the tab clicked

interface FormProps {
    action: string; // python path
}

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