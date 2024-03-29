import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

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
        <GridBox style={{ flexDirection: `column` }}>
          {steps.map(({ node }) => (
            <GridBox key={node.id} style={{ paddingTop: 60 }}>
              <div>
                <img
                  src={node.image.file.url}
                  alt={node.image.description}
                  css={css`
                    width: 80vw;
                    margin: 0 auto;
                    margin-top: 50px;

                    @media (min-width: 701px) {
                      max-width: 400px;
                    }
                  `}
                />
              </div>
              <GridItem>
                <h4 style={{ fontSize: `1.5rem` }}>{node.title}</h4>
                <p
                  style={{
                    fontSize: `1.1rem`,
                    textAlign: `center`,
                    marginTop: 20,
                  }}
                >
                  {node.description.description}
                </p>
              </GridItem>
            </GridBox>
          ))}
        </GridBox>
        <h1 style={{ marginTop: 100 }}>Our Service Model</h1>
        <GridBox>
          {model.map(({ node }) => (
            <GridItem key={node.id}>
              <h4 style={{ fontSize: `1.5rem` }}>{node.title}</h4>
              <p
                style={{
                  fontSize: `1.1rem`,
                  textAlign: `center`,
                  marginTop: 20,
                }}
              >
                {node.description.description}
              </p>
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
