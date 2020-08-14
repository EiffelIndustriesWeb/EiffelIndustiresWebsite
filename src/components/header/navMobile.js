import React, { useState } from 'react'
import { Link } from "gatsby"
import NavItem from './navItem';

export default function NavMobile() {

    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <div className={'mobile-nav--wrapper'}>
            <div className={'mobile-button--container'}>
                <button className={'mobile-nav--button'} onClick={() => setMobileOpen(!mobileOpen)}>=</button>
            </div>
            {mobileOpen &&
                <>
                    <ul className="mobile-nav-item--container">
                        <li className="nav-item--parent">
                            <NavItem
                                parent="About Us"
                                child0="About"
                                link0="/about"
                                child1="Press"
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
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </>}
        </div>

    )
}
