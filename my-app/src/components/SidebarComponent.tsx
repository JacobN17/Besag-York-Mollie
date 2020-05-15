import React from 'react';
import './SidebarComponent.css';

// // when upload tab is pressed do this stuff
// //create an upload side nav bar that sites below main navigation
// //pops up specific side nav items depending on the tab clicked

interface FormProps {
    action: string; // python path
}


// export const SidebarComponent: React.FC<FormProps> = ({ action }) => {
// // export const SidebarComponent: React.FC = (): JSX.Element =>
//     return (
//         <div className="input-container"> 
//             <form className="form-wrapper" action={ action } encType="multipart/form-data">
//                 <input className="btn-file" type="file"  id="myFile" name="filename" />
//                 <input className="submit" type="submit" />
//             </form>
//         </div>
//     )
// }


export const SidebarComponent: React.FC<FormProps> = ({action}) => {
    return (
        <div className="input-container">
            <form className="form-wrapper">
                <button className="file-chooser-button" type="button">
                    Choose File
                    <input className="file-input" type="file" name="file" />
                </button>

                <button className="upload-button" type="submit">
                    Sumbit
                </button>
            </form>
        </div>
    )
}

