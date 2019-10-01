import React from "react"
import styled from "@emotion/styled"

import SecondaryButton from "./secondary-button"

const Main = styled("div")`
  background: #e7ecef;
  padding: 60px 60px 0px 60px;
  margin-top: 40px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 701px) {
    flex-direction: row;
  }
`

const ContactMessage = styled("div")`
  align-content: center;
  align-self: auto;
  margin: 0 auto;
  max-width: 400px;
`

const Contact = () => {
  return (
    <Main>
      <ContactMessage>
        <h2>How can we help your business?</h2>
        <SecondaryButton link="contact">LET'S WORK TOGETHER</SecondaryButton>
      </ContactMessage>
      <ContactMessage>
        <h2>What programs can help you grow?</h2>
        <SecondaryButton link="programs">FIND GRANT PROGRAMS</SecondaryButton>
      </ContactMessage>
    </Main>
  )
}

export default Contact
