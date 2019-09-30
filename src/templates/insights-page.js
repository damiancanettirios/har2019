import React from "react"
import { graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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

  return (
    <Layout pageTitle={`${post.title} | Hunter Applied Research`}>
      <Hero heroImage={heroImage} heroContent={post} />
      <div
        style={{
          width: `80%`,
          margin: `0 auto`,
          paddingTop: 60,
          paddingBottom: 60,
        }}
      >
        {insightContent}
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
    }
  }
`
