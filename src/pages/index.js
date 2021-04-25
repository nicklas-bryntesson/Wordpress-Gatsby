import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import GatsbyLogo from "../assets/icons-components/Gatsby-512x512.svg"
import WordpressLogo from "../assets/icons-components/Wordpress-512x512.svg"
import GraphQlLogo from "../assets/icons-components/GraphQL-512x512.svg"
import ReactLogo from "../assets/icons-components/React-512x575.svg"

import * as style from "../templates/single.module.css"
import * as indexStyle from "./index.module.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LinkPosts from "../components/LinkPosts"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div className={indexStyle.hero__header}>
      <div className={indexStyle.hero__wrapper}>
        <img 
          src={GatsbyLogo} 
          alt="GatsbyJS - Logo" 
          className={indexStyle.hero__logo}
        />
        <img 
          src={GraphQlLogo} 
          alt="GraphQL - Logo"
          className={indexStyle.hero__logo}
        />
        <img 
          src={ReactLogo} 
          alt="React - Logo" 
          className={indexStyle.hero__logo}
        />
        <img 
          src={WordpressLogo} 
          alt="Wordpress - Logo" 
          className={indexStyle.hero__logo}
        />
      </div>
 
      <div className={indexStyle.hero__wave}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#ffffff', width: '154%', height: 74, transform: 'rotate(180deg) scaleX(-1)' }}
        >
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
        </svg>
      </div>

    </div>

    <article className={style.article}>
    <h1>Hej svejs från index.js!</h1>
    <p><strong>Välkommen till en Headless Wordpress sida byggd med Gatsby, React och GraphQL.</strong></p>

      <p>När siten byggs ihop hämtas allt innehåll från vår Wordpress site och en statisk kopia av det innehållet vi har frågat efter skapas.<br></br>
      Men det är inte allt, vi har fortfarande tillgång till React och kan kombinera teknikerna hur vi vill.<br></br>
      För Gatsby är Wordpress bara ännu en datakälla i mängden.<br></br>
      Vi skulle tex kunna ha vår Blog på en Wordpress installation, vår Webshop hos Shopify en bokningstjänst via Timekit, kombinationsmöjligheterna är oändliga.</p>

    <p>Just den här sidan, index.js är till exempel byggd som en fristående komponent i React och har ingen koppling till Wordpress databas över huvudtaget.</p>

    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />

    <LinkPosts />

    </article>
  </Layout>
)

export default IndexPage
