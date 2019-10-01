import React from "react"
import { graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import YouTube from "react-youtube"

import Layout from "../components/layout"
import Hero from "../components/hero"

const InsightPostTemplate = ({ data }) => {
  const post = data.post
  const heroImage = data.post.imageTitle
  const Bold = ({ children }) => (
    <h2 style={{ textAlign: `left`, margin: `40px 0px 15px 0px` }}>
      {children}
    </h2>
  )
  const Text = ({ children }) => (
    <p style={{ textAlign: `left`, fontSize: `1.25rem`, marginBottom: 20 }}>
      {children}
    </p>
  )

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  }

  const insightContent = documentToReactComponents(
    post.childContentfulBlogPostContentRichTextNode.json,
    options
  )

  const opts = {
    height: "250",
    width: "400",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }

  return (
    <Layout pageTitle={`${post.title} | Hunter Applied Research`}>
      <Hero heroImage={heroImage} heroContent={post} />
      <div
        style={{
          width: `100%`,
          margin: `0 auto`,
        }}
      >
        {post.postType === "video notes" ? (
          <div style={{ paddingTop: 60, textAlign: `center` }}>
            <YouTube videoId={post.videoUrl} opts={opts} />
          </div>
        ) : null}
        <div style={{ marginTop: 60, marginBottom: 60, width: `95%` }}>
          {insightContent}
        </div>
      </div>
    </Layout>
  )
}

export default InsightPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      imageTitle {
        fluid(quality: 99) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      shortDescript {
        shortDescript
      }
      childContentfulBlogPostContentRichTextNode {
        json
      }
      videoUrl
      postType
    }
  }
`
