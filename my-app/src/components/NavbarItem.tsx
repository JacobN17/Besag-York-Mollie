import React from "react";

interface NavbarItemProps {
    link: NavLink
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ link }) => {
    return (
        <li><a href={link.path}>{link.name}</a></li>
    )
};