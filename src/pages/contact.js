import React from "react"
import { graphql } from "gatsby"
import HubspotForm from "react-hubspot-form"

import Layout from "../components/layout"
import Hero from "../components/hero"

const ContactPage = ({ data }) => {
  const heroContent = data.heroContent
  const heroImage = data.heroImage.imageTitle

  return (
    <Layout pageTitle="Contact">
      <Hero heroImage={heroImage} heroContent={heroContent} />
      <div style={{ padding: 40, width: `50%`, margin: `0 auto` }}>
        <h1 style={{ paddingBottom: 40 }}>
          Provide us some details and we will get in touch
        </h1>
        <HubspotForm
          portalId="4233057"
          formId="17f63fb5-4074-4b34-984e-d21e58639880"
          onSubmit={() => console.log("Submit!")}
          onReady={form => console.log("Form ready!")}
          loading={<div>Loading...</div>}
        />
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
