import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const ButtonArea = styled("div")`
  display: flex;
  justify-content: center;
`

const Button = styled("button")`
  align-self: center;
  background: transparent;
  height: 60px;
  width: auto;
  border: 1px solid #8e44ad;
  text-decoration: none;
  margin: 3rem 0;
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.2;
  padding: 1.25rem 1.5rem;
  text-align: center;
  text-transform: uppercase;
  transition: all 200ms;
  display: inline-block;
  h1,
  h2,
  h3,
  h4 {
    color: #8e44ad;
  }
  &:hover {
    background: #8e44ad;
    cursor: pointer;
    h1,
    h2,
    h3,
    h4 {
      color: white;
    }
  }
`

const SecondaryButton = ({ children, link }) => (
  <ButtonArea>
    <Link to={`/${link}`}>
      <Button>
        <h4>{children}</h4>
      </Button>
    </Link>
  </ButtonArea>
)

export default SecondaryButton
