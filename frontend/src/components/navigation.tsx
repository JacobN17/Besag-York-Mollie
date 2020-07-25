import * as React from "react";
// @ts-ignore
import { Link } from "react-router-dom";
import '../css/navigation.css';


export const Navigation: React.FC <{}> = () => {
    return (
        <>
        <header>
            <nav>
                <div className="logo">
                    <h1>BYM Model</h1>
                </div>

                    <ul className="main-nav">
                        <li><Link className="nav-link" to="/home">Home</Link></li>
                        <li><Link className="nav-link" to="/upload">Upload</Link></li>
                        <li><Link className="nav-link" to="/bym">BYM</Link></li>
                    </ul>
                </nav>
       </header>

       <div className="image">
       </div>
    </>
    )
}



