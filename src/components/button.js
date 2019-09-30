import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const ButtonArea = styled("div")`
  display: flex;
  justify-content: center;
`

const Button = styled(Link)`
  align-self: center;
  height: 60px;
  width: auto;
  border: 1px solid #009688;
  text-decoration: none;
  margin: 3rem 0;
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.2;
  padding: 1.25rem 2rem;
  text-align: center;
  text-transform: uppercase;
  transition: all 200ms;
  display: inline-block;
  h1,
  h2,
  h3,
  h4 {
    color: #009688;
  }
  &:hover {
    background: #009688;
    cursor: pointer;
    h1,
    h2,
    h3,
    h4 {
      color: white;
    }
  }
`

const ButtonBox = ({ children, link }) => (
  <ButtonArea>
    <Button to={link}>
      <h4>{children}</h4>
    </Button>
  </ButtonArea>
)

export default ButtonBox
