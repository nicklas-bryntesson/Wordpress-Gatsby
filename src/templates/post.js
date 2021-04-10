import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import * as style from "./single.module.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Catlist from "../components/catlist"
import PostNav from "../components/postNav"

const postView = ({ data }) => {
  const post = data.thePost
  return (
    <Layout>
      <Seo title={post.title} />
      <article className={style.article}>
        {post.featuredImage && (
          <figure className={style.featimg}>
            <Img
              fixed={post.featuredImage.node.localFile.childImageSharp.fluid}
              alt={post.featuredImage.node.altText}
            />
          </figure>
        )}
        <Catlist postObject={post} />
        <h1 className={style.article__title}>{post.title}</h1>
        <div className={style.article__meta}>
          <strong>By:</strong>{" "} {post.author.node.name}. <strong>Published:</strong> {" "}
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <div
          className={style.article__content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div>
          Tagged:{" "}
          {post.tags.nodes.map((tag, index) => [
            index > 0 && ", ",
            <Link key={index} to={tag.link}>
              {tag.name}
            </Link>,
          ])}
        </div>
      </article>
      <PostNav prevPost={data.prevPost} nextPost={data.nextPost} />
    </Layout>
  )
}
export default postView;

export const query = graphql`
  query($databaseId: Int!, $nextId: Int, $prevId: Int) {
    thePost: wpPost(databaseId: { eq: $databaseId }) {
      date
      databaseId
      content
      title
      author {
        node {
          name
        }
      }
      categories {
        nodes {
          link
          name
        }
      }
      tags {
        nodes {
          link
          name
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1360) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    nextPost: wpPost(databaseId: { eq: $nextId }) {
      title
      uri
    }
    prevPost: wpPost(databaseId: { eq: $prevId }) {
      title
      uri
    }
  }
`
