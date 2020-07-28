import { Link } from "gatsby"
import React, { useState } from 'react'
import './header.css';
export default function NavItem(props) {
    const [openChild, setOpenChild] = useState(false)

    return (
        <li className="nav-item--parent" onClick={() => setOpenChild(!openChild)}>
            {props.parent}
            {openChild && <ul className="childContainer">
                <li><Link to={props.link0} >{props.child0}</Link></li>
                <li><Link to={props.link1} >{props.child1}</Link></li>
                <li><Link to={props.link2} >{props.child2}</Link></li>
            </ul>}
        </li>
    )
}
