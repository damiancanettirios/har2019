import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import GridBox from "../components/grid-box"
import GridItem from "../components/grid-item"

const Approach = ({ data }) => {
  const heroContent = data.heroContent
  const heroImage = data.heroImage.imageTitle
  const steps = data.blurbs.edges
  const model = data.model.edges
  return (
    <Layout pageTitle="Approach">
      <Hero heroImage={heroImage} heroContent={heroContent} />
      <div style={{ width: `90%`, margin: `0 auto` }}>
        <h1 style={{ marginTop: 40 }}>How We Work</h1>
        <div style={{ display: `flex`, flexDirection: `column` }}>
          {steps.map(({ node }) => (
            <div style={{ paddingTop: 60 }}>
              <GridBox key={node.id}>
                <div style={{ maxWidth: 400 }}>
                  <img
                    src={node.image.file.url}
                    alt={node.image.description}
                    style={{ maxWidth: 400 }}
                  />
                </div>
                <GridItem>
                  <h3>{node.title}</h3>
                  <h3 style={{ fontWeight: `normal`, marginTop: 20 }}>
                    {node.description.description}
                  </h3>
                </GridItem>
              </GridBox>
            </div>
          ))}
        </div>
        <h1 style={{ marginTop: 40 }}>Our Service Model</h1>
        <GridBox>
          {model.map(({ node }) => (
            <GridItem key={node.id}>
              <h3>{node.title}</h3>
              <h3 style={{ fontWeight: `normal` }}>
                {node.description.description}
              </h3>
            </GridItem>
          ))}
        </GridBox>
      </div>
    </Layout>
  )
}

export default Approach

export const pageQuery = graphql`
  {
    blurbs: allContentfulBlurbs(
      filter: { pageContent: { title: { eq: "Our Approach" } } }
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
    model: allContentfulBlurbs(
      filter: { pageContent: { title: { eq: "Our Service Model" } } }
      sort: { fields: [sequence], order: ASC }
    ) {
      edges {
        node {
          id
          title
          description {
            description
          }
        }
      }
    }
    heroImage: contentfulHeros(page: { eq: "Approach" }) {
      imageTitle {
        title
        fluid(quality: 99) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    heroContent: contentfulPageContent(
      page: { eq: "Approach" }
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
  }
`
