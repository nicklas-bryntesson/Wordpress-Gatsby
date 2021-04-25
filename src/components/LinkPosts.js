import React from 'react'

import AniLink from "gatsby-plugin-transition-link/AniLink"

const LinkPosts = () => (
    <div>
        <AniLink paintDrip to="/posts/" hex="#4b2571">
            Till alla poster
        </AniLink>
    </div>
)

export default LinkPosts
