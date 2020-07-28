import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from '../assets/logo/logo';
import Nav from './nav';
import NavMobile from './navMobile';
import './header.css';

const Header = ({ siteTitle }) => (
  <header className={'header--wrapper'}>
    {/* Logo Section */}
    <div className={'header-logo--container'}>
      <Link
        to="/"
      >
        <Logo className={'header-logo--image'} />
      </Link>
    </div>

    {/* Navigation Section */}
    <div className={'header-nav--container'}>
      <Nav />
      <NavMobile />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
