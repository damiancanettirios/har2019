import React from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import Hero from "../components/hero"
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
      <div style={{ width: `90%`, margin: `0 auto` }}>
        <h1 style={{ marginTop: 40 }}>{team.title}</h1>
        <h2>{team.shortDescript.shortDescript}</h2>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {members.map(({ node }) => (
            <DisplayBox key={node.name}>
              <img alt={node.name} src={node.image.file.url} />
              <h3>{node.name}</h3>
              <h3>{node.title}</h3>
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
                ) : (
                  <section />
                )}
              </div>
            </DisplayBox>
          ))}
        </div>
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
            id
            longBio
          }
        }
      }
    }
  }
`
