import React from "react"
import { graphql } from "gatsby"
import HubspotForm from "react-hubspot-form"
import { css } from "@emotion/core"

import Fab from "@material-ui/core/Fab"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import Hero from "../components/hero"
import GridBox from "../components/grid-box"

const ContactPage = ({ data }) => {
  const heroContent = data.heroContent
  const heroImage = data.heroImage.imageTitle

  return (
    <Layout pageTitle="Contact">
      <Hero heroImage={heroImage} heroContent={heroContent} />
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
      >
        <Fab
          variant="extended"
          color="primary"
          href="https://calendly.com/hunter-applied/introduction"
          style={{ marginTop: 40 }}
        >
          <FontAwesomeIcon
            icon={faCalendarAlt}
            size="lg"
            style={{ marginRight: 3 }}
          />
          <h3 style={{ color: `white`, padding: 4, fontSize: `1.1rem` }}>
            Book a Call
          </h3>
        </Fab>
        <h1 style={{ paddingTop: 40, paddingBottom: 40, margin: `0 auto` }}>
          ... or Send Us a Note
        </h1>
        <GridBox>
          <HubspotForm
            portalId="4233057"
            formId="17f63fb5-4074-4b34-984e-d21e58639880"
            onSubmit={() => console.log("Submit!")}
            onReady={form => console.log("Form ready!")}
            loading={<div>Loading...</div>}
            css={css`
              min-width: 400px;
              align-self: auto;
            `}
          />
        </GridBox>
      </div>
    </Layout>
  )
}

export default ContactPage

export const ContactQuery = graphql`
  {
    heroImage: contentfulHeros(title: { eq: "Telephones" }) {
      imageTitle {
        title
        fluid(quality: 99) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    heroContent: contentfulPageContent(
      page: { eq: "Contact" }
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
