import React from 'react';


// when upload tab is pressed do this stuff
//create an upload side nav bar that sites below main navigation
//pops up specific side nav items depending on the tab clicked
export const SidebarComponent = () => {
    return (
        // i am returning something depending on the navbar item clicked
        <ul>
            <button>
                <li>Upload</li>
            </button>
            <button>
                <li>Share</li>
            </button>
        </ul>
    )
}