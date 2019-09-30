import React from "react"
import styled from "@emotion/styled"

const LinkBox = styled("div")`
  a {
    margin: 0.5rem;
    color: lightgrey;
    &:hover {
      color: #009688;
    }
  }
`

const SocialLink = ({ children, link }) => (
  <LinkBox>
    <a href={link}>{children}</a>
  </LinkBox>
)

export default SocialLink
