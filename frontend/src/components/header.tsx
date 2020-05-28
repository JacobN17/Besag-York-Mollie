import * as React from "react";
// @ts-ignore
import { Link } from "react-router-dom";
import '../css/header.css';


const Header: React.FC <{}> = () => {
    return (
        <div className="navbar-header navbar-container">
            {/*<nav className="navbar-wrapper">*/}
                    <ul className="navbar">
                            <Link className="nav-link" to="/home">
                                Home
                            </Link>

                            {/*<Link className="nav-link" to="/upload">*/}
                            {/*    Upload*/}
                            {/*</Link>*/}

                            <Link className="nav-link" to="/bym">
                                BYM
                            </Link>

                            <Link className="nav-link" to="/share">
                                Share
                            </Link>
                    </ul>
            {/*</nav>*/}
        </div>
    )
}
export default Header;
