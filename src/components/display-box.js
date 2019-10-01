import React from "react"
import styled from "@emotion/styled"

const TextBox = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid grey;
  height: 100%;
  justify-content: flex-end;
  padding: 2rem 0 2rem 0;
  margin: 2rem 0.5rem 0 0.5rem;
  width: 300px;
  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }
  h2 {
    padding: 1rem 2rem;
  }
  img {
    margin: 10px 0px 10px 0px;
    width: 100px;
  }
  p,
  a {
    margin-top: 0;
  }
  a {
    margin-top: 0.5rem;
  }
`

const DisplayBox = ({ children }) => <TextBox>{children}</TextBox>

export default DisplayBox
