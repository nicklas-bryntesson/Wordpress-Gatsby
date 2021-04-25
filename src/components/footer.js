import React from "react"
import FooterNav from "./footerNav"

import SiteLogo from "./logo.svg";

import * as style from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.widgets}>
        <FooterNav />
        <div classList={style.logo__wrapper}>
          <figure className={style.logo}>

            <img 
              src={SiteLogo} 
              alt="Site logo - Icon of Wapuu the wordpress mascot, hugging a Gatsby JS logo" 
            />


          </figure>
        </div>
      </div>
      <div className={style.site__info}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a> | <a href="https://www.wordpress.org">Wordpress</a>
      </div>
    </footer>
  )
}

export default Footer