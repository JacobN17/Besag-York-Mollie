import React from "react";

interface NavbarItemProps {
    link: NavigationLink
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ link }) => {
    return (
        // <ul>
            <li><a href={link.path}>{link.name}</a></li>
        // </ul>
    )
};