import React from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import Hero from "../components/hero"
import GridBox from "../components/grid-box"
import DisplayBox from "../components/display-box"
import SocialLink from "../components/social-link"

const About = ({ data }) => {
  const heroContent = data.heroContent
  const heroImage = data.heroImage.imageTitle
  const team = data.team
  const members = data.members.edges
  return (
    <Layout pageTitle="About">
      <Hero heroImage={heroImage} heroContent={heroContent} />
      <div style={{ width: `85%`, margin: `0 auto` }}>
        <h1 style={{ marginTop: 40 }}>{team.title}</h1>
        <p style={{ fontSize: `1.1rem`, textAlign: `center` }}>
          {team.shortDescript.shortDescript}
        </p>
        <GridBox>
          {members.map(({ node }) => (
            <DisplayBox key={node.name}>
              <img alt={node.name} src={node.image.file.url} />
              <h4 style={{ fontSize: `1.5rem` }}>{node.name}</h4>
              <p
                style={{
                  fontSize: `1.1rem`,
                  textAlign: `center`,
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                {node.title}
              </p>
              <div style={{ display: "flex", flexDirection: "row" }}>
                {node.linkedIn != null ? (
                  <SocialLink link={node.linkedIn}>
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                  </SocialLink>
                ) : (
                  <section />
                )}
                {node.email != null ? (
                  <SocialLink link={node.email}>
                    <FontAwesomeIcon icon={faAt} size="lg" />
                  </SocialLink>
                ) : null}
              </div>
              {node.longBio != null ? (
                <div>
                  <p>{node.longBio.longBio}</p>
                </div>
              ) : null}
            </DisplayBox>
          ))}
        </GridBox>
      </div>
    </Layout>
  )
}

export default About

export const AboutQuery = graphql`
  {
    heroImage: contentfulHeros(page: { eq: "About" }) {
      imageTitle {
        title
        fluid(quality: 99) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    heroContent: contentfulPageContent(
      page: { eq: "About" }
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
    team: contentfulPageContent(title: { eq: "Our Team" }) {
      id
      title
      shortDescript {
        shortDescript
      }
    }
    members: allContentfulPerson(sort: { fields: [sequence], order: ASC }) {
      edges {
        node {
          id
          name
          title
          location
          email
          linkedIn
          image {
            file {
              url
            }
          }
          longBio {
            longBio
          }
        }
      }
    }
  }
`
