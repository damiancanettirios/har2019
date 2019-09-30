import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"

const ServicesPage = ({ data }) => {
  const heroContent = data.heroContent
  const heroImage = data.heroImage.imageTitle
  const services = data.services.edges
  return (
    <Layout pageTitle="Services">
      <Hero heroImage={heroImage} heroContent={heroContent} />
      <div style={{ width: `90%`, margin: `0 auto` }}>
        <h1 style={{ margin: `40px 0px 40px 0px` }}>Consulting Services</h1>
        <ul style={{ listStyle: `none`, width: `100%`, margin: `0 auto` }}>
          <div
            style={{
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `center`,
              alignItems: `flex-start`,
              flexWrap: `wrap`,
              height: `100%`,
            }}
          >
            {services.map(({ node }) => (
              <div
                key={node.id}
                style={{
                  margin: `0px 20px 20px 0px`,
                  padding: 5,
                  paddingBottom: 10,
                  width: 400,
                  alignSelf: `auto`,
                }}
              >
                {/* <Link
                  to={`/${node.type}/${node.slug}`}
                  style={{ textDecoration: `none`, color: `black` }}
                > */}
                <li
                  key={node.id}
                  style={{ display: `list-item`, paddingRight: 20 }}
                >
                  <div
                    style={{
                      display: `flex`,
                      flexDirection: `column`,
                      alignItems: `flex-start`,
                      justifyContent: `flex-start`,
                      borderBottom: `1px solid #636363`,
                      minHeight: `15rem`,
                    }}
                  >
                    <div
                      style={{
                        display: `flex`,
                        flexDirection: `row`,
                        width: `100%`,
                        justifyContent: `space-between`,
                      }}
                    >
                      <h4
                        style={{
                          color: `black`,
                          paddingTop: 8,
                          textAlign: `left`,
                        }}
                      >
                        {node.blurbTitle}
                      </h4>
                      <h4 style={{ paddingLeft: 8, textAlign: `right` }}>
                        &rarr;
                      </h4>
                    </div>
                    <p style={{ color: `#636363`, paddingTop: 10 }}>
                      {node.shortBlurb}
                    </p>
                  </div>
                </li>
                {/* </Link> */}
              </div>
            ))}
          </div>
        </ul>
      </div>
    </Layout>
  )
}

export default ServicesPage

export const ServiceQuery = graphql`
  {
    heroImage: contentfulHeros(page: { eq: "Services" }) {
      title
      imageTitle {
        fluid(quality: 99) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    heroContent: contentfulPageContent(
      page: { eq: "Services" }
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
    services: allContentfulServices(sort: { fields: sequence, order: ASC }) {
      edges {
        node {
          id
          blurbTitle
          shortBlurb
          slug
          type
        }
      }
    }
  }
`
