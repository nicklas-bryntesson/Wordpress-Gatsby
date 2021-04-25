import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import * as style from "./header.module.css"

import SiteLogo from "./logo.svg";

import MainNav from "./mainNav"

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <div className={style.header__wrapper}>
      
  
      <div className={style.header__logo}>
        <Link to="/">
          <img 
            src={SiteLogo} 
            alt="Site logo - Icon of Wapuu the wordpress mascot, hugging a Gatsby JS logo" />
        </Link>
      </div>

      <h1 className={style.header__title}>
        <Link to="/" >{siteTitle}</Link>
      </h1>

      <MainNav />

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
