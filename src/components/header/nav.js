import React from 'react'
import { Link } from "gatsby"
import NavItem from './navItem';
export default function Nav() {

    return (
        <ul className="nav-item--container">
            <li className="nav-item--parent">
                <NavItem
                    parent="About Us"
                    child0="About"
                    link0="/about"
                    child1="Press Release"
                    link1="/press"
                />
            </li>
            <li className="nav-item--parent">
                <NavItem
                    parent="Services"
                    child0="Structural Engineers"
                    link0="/structuralEngineers"
                    child1="Construction"
                    link1="/construction"
                    child2="Better Build"
                    link2="/betterBuild"
                />
            </li>
            <li className="nav-item--parent">
                <Link to="">Contact</Link>
            </li>
        </ul>
    )
}
