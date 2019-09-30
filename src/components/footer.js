import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt } from "@fortawesome/free-solid-svg-icons"
import {
  faMedium,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

import FooterLink from "./footer-link"
import SocialLink from "./social-link"

import useMainlogo from "../hooks/use-mainlogo"

const FooterDiv = styled("div")`
  padding: 2rem;
  background: #272932;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: lightgrey;
`

const FooterList = styled("section")`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`

const SocialList = styled("div")`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`

const Footer = () => {
  const { name, image } = useMainlogo()
  return (
    <>
      <FooterDiv>
        <FooterList>
          <FooterLink page="/">
            <img
              src={image.file.url}
              alt={name}
              style={{ margin: 0, width: 150, paddingTop: 3 }}
            />
          </FooterLink>
          <SocialList>
            <SocialLink link={"https://twitter.com/hunterapplied"}>
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </SocialLink>
            <SocialLink
              link={"https://www.linkedin.com/company/hunter-applied/"}
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </SocialLink>
            <SocialLink link={"https://medium.com/@HunterApplied"}>
              <FontAwesomeIcon icon={faMedium} size="lg" />
            </SocialLink>
            <SocialLink link={"mailto:damian@hunterapplied.com"}>
              <FontAwesomeIcon icon={faAt} size="lg" />
            </SocialLink>
          </SocialList>
        </FooterList>
        <FooterList>
          <FooterLink page="/about/">
            <b>COMPANY</b>
          </FooterLink>
          <FooterLink page="/about/">About</FooterLink>
          <FooterLink page="/approach/">Approach</FooterLink>
          <FooterLink page="/services/">Services</FooterLink>
          <FooterLink page="/insights/">Insights</FooterLink>
        </FooterList>
        <FooterList>
          <FooterLink page="/programs/">
            <b>PROGRAMS</b>
          </FooterLink>
          <FooterLink page="/programs/">R&D Tax Incentive</FooterLink>
          <FooterLink page="/programs/">
            Accelerating Commercialisation
          </FooterLink>
          <FooterLink page="/programs/">
            Export Market Development Grant
          </FooterLink>
          <FooterLink page="/programs/">Department of Health Grants</FooterLink>
          <FooterLink page="/programs/">NDIS ILC Grant</FooterLink>
        </FooterList>
      </FooterDiv>
      <FooterDiv>
        <FooterList style={{ margin: `0 auto` }}>
          {"Hunter Applied Research Pty Ltd | ABN 71 616 755 161"}
        </FooterList>
      </FooterDiv>
    </>
  )
}

export default Footer
