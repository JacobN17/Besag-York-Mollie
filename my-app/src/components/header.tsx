import * as React from "react";
import { Link } from "react-router-dom";
import '../css/header.css';


export const Header: React.FC <{}> = () => {
    return (
        <div className="navbar-header navbar-container">
            {/*<nav className="navbar-wrapper">*/}
                    <ul className="navbar">
                            <Link className="nav-link" to="/home">
                                Home
                            </Link>

                            <Link className="nav-link" to="/bym">
                                BYM
                            </Link>

                            <Link className="nav-link" to="/members">
                                Upload
                            </Link>
                    </ul>
            {/*</nav>*/}
        </div>
    )
};
