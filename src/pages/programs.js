import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"

const ProgramsPage = ({ data }) => {
  const heroContent = data.heroContent
  const heroImage = data.heroImage.imageTitle
  const grants = data.grants.edges
  return (
    <Layout pageTitle="Programs">
      <Hero heroImage={heroImage} heroContent={heroContent} />
      <div style={{ width: `90%`, margin: `0 auto` }}>
        <h1 style={{ margin: `40px 0px 40px 0px` }}>Grant Programs</h1>
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
            {grants.map(({ node }) => (
              <div
                key={node.id}
                style={{
                  margin: `0px 20px 20px 0px`,
                  padding: 0,
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
                      <h4 style={{ paddingLeft: 8 }}>&rarr;</h4>
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

export default ProgramsPage

export const ProgramsQuery = graphql`
  {
    heroImage: contentfulHeros(page: { eq: "Programs" }) {
      title
      imageTitle {
        fluid(quality: 99) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    heroContent: contentfulPageContent(
      page: { eq: "Programs" }
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
    grants: allContentfulGrantPrograms(sort: { fields: sequence, order: ASC }) {
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
