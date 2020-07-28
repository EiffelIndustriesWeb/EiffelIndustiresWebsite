import React from 'react'
import { Link } from "gatsby"
import NavItem from './navItem';
export default function Nav() {

    return (
        <ul className="nav-item--container">
            <li className="nav-item--parent">
                <Link to="/about">ABOUT US</Link>
            </li>
            <li className="nav-item--parent">
                <NavItem
                    parent="Services"
                    child0="Structural Engineers"
                    link0="/about"
                    child1="Construction"
                    link1="/about"
                    child2="Better Build"
                    link2="https://dunamispacific.com/"
                />
            </li>
            <li className="nav-item--parent">
                <Link to="">WORK</Link>
            </li>
            <li className="nav-item--parent">
                <Link to="">CONTACT</Link>
            </li>
        </ul>
    )
}
