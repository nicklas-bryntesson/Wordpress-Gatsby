import React from 'react'
import UseSound from 'use-sound';

import Booing from "../assets/sound/booing.mp3"

import AniLink from "gatsby-plugin-transition-link/AniLink"

// Function for handle clicks:

const LinkPosts = () => (
    <div>
        <AniLink 
            paintDrip to="/posts/" 
            hex="#4b2571"
        >
            Till alla poster

        </AniLink>
    </div>
)

export default LinkPosts
