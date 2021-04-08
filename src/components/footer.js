import React from "react"
import FooterNav from "./footerNav"
import { StaticImage } from "gatsby-plugin-image"
import * as style from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={style.site__footer}>
      <FooterNav />
      <figure>
       <StaticImage
          src="../images/gatsby-wapuus.png"
          width={125}
          height={125}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="The Gatsby Mascot"
          style={{ marginBottom: `1.45rem` }}
        />
      </figure>
      <div className={style.site__info}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a> | <a href="https://www.wordpress.org">Wordpress</a>
      </div>
    </footer>
  )
}

export default Footer