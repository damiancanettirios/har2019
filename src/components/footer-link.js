import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const LinkBox = styled(Link)`
  margin: 0;
  text-decoration: none;
  color: lightgrey;
  &:hover {
    color: #009688;
  }
`

const FooterLink = ({ children, page }) => (
  <LinkBox to={page}>{children}</LinkBox>
)

export default FooterLink
