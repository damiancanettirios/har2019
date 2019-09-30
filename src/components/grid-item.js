import React from "react"
import styled from "@emotion/styled"

const GridItem = styled("div")`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  padding: 1rem 0 1rem 0;
  margin: 1rem 0.5rem 0 0.5rem;
`

const GridItemStyle = ({ children }) => <GridItem>{children}</GridItem>

export default GridItemStyle
