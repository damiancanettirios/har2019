import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"

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
        <h1 style={{ margin: `40px 0px 40px 0px` }}>
          Articles to explore and Notes from interesting Talks
        </h1>
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
              css={css`
                border: ${node.postType === "article"
                  ? "1px solid #8e44ad"
                  : "1px solid #27ae60"};
                margin: 0px 20px 20px 0px;
                padding: 0;
                padding-bottom: 10;
                max-width: 275px;
                align-self: auto;
              `}
            >
              <div
                css={css`
                  max-height: 40px;
                  background: ${node.postType === "article"
                    ? "#8e44ad"
                    : "#27ae60"};
                  border: ${node.postType === "article"
                    ? "2px solid #8e44ad"
                    : "2px solid #27ae60"};
                  margin: 0px;
                  padding-left: 8px;
                  text-transform: uppercase;
                  font-size: 0.75rem;
                  color: white;
                `}
              >
                <p>{node.postType}</p>
              </div>
              <img
                src={node.imageTitle.file.url}
                alt={node.imageTitle.title}
                style={{ maxWidth: 273, margin: `0 auto` }}
              />
              <Link
                to={`/insights/${node.slug}`}
                style={{ textDecoration: `none` }}
              >
                <h3
                  style={{
                    textAlign: `left`,
                    padding: `10px 12px 0px 12px`,
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
                  padding: `0px 12px 5px 12px`,
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
          postType
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
