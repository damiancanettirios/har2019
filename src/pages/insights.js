import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"

const InsightsPage = ({ data }) => {
  const heroContent = data.heroContent
  const heroImage = data.heroImage.imageTitle
  const posts = data.allContentfulBlogPost.edges
  return (
    <Layout pageTitle="Insights">
      <Hero heroImage={heroImage} heroContent={heroContent} />
      <div style={{ width: `85%`, margin: `0 auto` }}>
        <h1 style={{ margin: `40px 0px 40px 0px` }}>Articles to explore</h1>
        <div
          style={{
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `center`,
            flexWrap: `wrap`,
          }}
        >
          {posts.map(({ node }) => (
            <div
              key={node.id}
              style={{
                border: `1px solid #E7ECEF`,
                borderTop: `3px solid #8e44ad`,
                margin: `0px 20px 20px 0px`,
                padding: 0,
                paddingBottom: 10,
                width: 300,
                alignSelf: `auto`,
              }}
            >
              <img
                src={node.imageTitle.file.url}
                alt={node.imageTitle.title}
                style={{ width: 300 }}
              />
              <Link
                to={`/insights/${node.slug}`}
                style={{ textDecoration: `none` }}
              >
                <h3
                  style={{
                    textAlign: `left`,
                    padding: `10px 0px 0px 10px`,
                    fontSize: `1.25rem`,
                  }}
                >
                  {node.title}
                </h3>
              </Link>
              <p
                style={{
                  fontWeight: `normal`,
                  marginTop: 10,
                  textAlign: `left`,
                  padding: `0px 10px 0px 10px`,
                  fontSize: `1.1rem`,
                }}
              >
                {node.description.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default InsightsPage

export const insightsQuery = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          publishDate(formatString: "MMMM Do, YYYY")
          slug
          description {
            description
          }
          author {
            name
            email
            shortBio {
              shortBio
            }
            image {
              file {
                url
              }
              title
            }
          }
          imageTitle {
            file {
              url
            }
            title
          }
        }
      }
    }
    heroImage: contentfulHeros(page: { eq: "Insights" }) {
      title
      imageTitle {
        fluid(quality: 99) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    heroContent: contentfulPageContent(
      page: { eq: "Insights" }
      position: { eq: "Hero" }
    ) {
      id
      title
      shortDescript {
        shortDescript
      }
      longDescript {
        longDescript
      }
      page
    }
  }
`
