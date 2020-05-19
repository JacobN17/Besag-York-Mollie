import React from "react";

interface NavbarProps {
    link: NavLink
}

export const Navbar: React.FC<NavbarProps> = ({ link }) => {
    return (
    <div className="Navheader">
        <ul className="Navbar"><a href={link.path}>{link.name}</a></ul>
    </div>
    )
};
