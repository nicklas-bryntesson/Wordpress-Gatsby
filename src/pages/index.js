import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as style from "../templates/single.module.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div
        style={{ 
          position: `relative`,
          marginBottom: `1.75rem`,
          backgroundColor: `#FFDE00`,
          padding: `3rem`
        }} 
      >
      <div
        style={{ 
          overflow: 'hidden',
          position: 'absolute',
          height: '74px',
          bottom: '0',
          left: '0',
          right: '0'
        }} 
      >
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
    <p>
      <Link to="/posts/">Alla Poster</Link>
    </p>
    </article>
    
  </Layout>
)

export default IndexPage
