import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Button from "../components/button"
import SecondaryButton from "../components/secondary-button"

const Home = ({ data }) => {
  const heroContent = data.heroContent
  const heroImage = data.heroImage.imageTitle
  const valueProp = data.valueProp
  const valuePropStages = data.valuePropStages.edges
  const insights = data.insights
  const topInsights = data.topInsights.edges
  return (
    <Layout pageTitle="Welcome">
      <Hero heroImage={heroImage} heroContent={heroContent} />
      <div style={{ width: `90%`, margin: `0 auto` }}>
        <h1 style={{ paddingBottom: 20, marginTop: 40 }}>{valueProp.title}</h1>
        <p style={{ fontSize: `1.5rem`, textAlign: `center` }}>
          {valueProp.shortDescript.shortDescript}
        </p>
        <div
          style={{
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `space-evenly`,
            flexWrap: `wrap`,
          }}
        >
          {valuePropStages.map(({ node }) => (
            <div
              key={node.id}
              style={{
                alignSelf: `center`,
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `center`,
                maxWidth: `400px`,
                padding: `1rem 0 1rem 0`,
                margin: `1rem 0.5rem 0 0.5rem`,
              }}
            >
              <img
                src={node.image.file.url}
                alt={node.image.description}
                style={{ maxWidth: 300, height: 290, margin: `0px auto` }}
              />
              <h2>{node.title}</h2>
              <p style={{ fontSize: `1.1rem`, textAlign: `center` }}>
                {node.description.description}
              </p>
            </div>
          ))}
        </div>
        <Button link="programs">{valueProp.cta}</Button>
        <div style={{ paddingTop: 40 }}>
          <h1 style={{ paddingBottom: 20 }}>{insights.title}</h1>
          <div
            style={{
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `space-evenly`,
            }}
          >
            {topInsights.map(({ node }) => (
              <div
                key={node.id}
                style={{
                  border: `1px solid #E7ECEF`,
                  borderTop: `3px solid #8e44ad`,
                  marginBottom: 20,
                  padding: 0,
                  maxWidth: 400,
                  alignSelf: `auto`,
                }}
              >
                <Link to={`/insights/${node.slug}`}>
                  <img
                    alt={node.imageTitle.file.fileName}
                    src={node.imageTitle.file.url}
                    style={{ maxWidth: 400 }}
                  />
                </Link>
                <div style={{ padding: 10 }}>
                  <Link
                    to={`/insights/${node.slug}`}
                    style={{ textDecoration: `none` }}
                  >
                    <h4
                      style={{
                        fontWeight: `bold`,
                        textAlign: `left`,
                        fontSize: `1.25rem`,
                        paddingBottom: 10,
                      }}
                    >
                      {node.title}
                    </h4>
                  </Link>
                  <p>{node.description.description}</p>
                </div>
              </div>
            ))}
          </div>
          <SecondaryButton link={insights.ctaPage}>
            {insights.cta}
          </SecondaryButton>
        </div>
      </div>
    </Layout>
  )
}

export default Home

export const HomeQuery = graphql`
  {
    heroImage: contentfulHeros(page: { eq: "Home" }) {
      imageTitle {
        title
        fluid(quality: 99) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    heroContent: contentfulPageContent(
      page: { eq: "Home" }
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
      cta
      ctaPage
      page
      isLongDescript
    }
    valueProp: contentfulPageContent(
      page: { eq: "Home" }
      position: { eq: "Value Prop" }
    ) {
      id
      title
      shortDescript {
        shortDescript
      }
      cta
      ctaPage
    }
    valuePropStages: allContentfulBlurbs(
      filter: { page: { eq: "Home" } }
      sort: { fields: [sequence], order: ASC }
    ) {
      edges {
        node {
          id
          title
          description {
            description
          }
          image {
            id
            description
            file {
              url
            }
          }
        }
      }
    }
    insights: contentfulPageContent(
      page: { eq: "Home" }
      position: { eq: "Insights" }
    ) {
      id
      title
      cta
      ctaPage
    }
    topInsights: allContentfulBlogPost(limit: 2) {
      edges {
        node {
          id
          title
          slug
          description {
            description
          }
          imageTitle {
            file {
              url
              fileName
            }
          }
        }
      }
    }
  }
`
