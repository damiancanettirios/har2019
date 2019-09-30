import React from "react"
import styled from "@emotion/styled"

const GridBox = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const GridBoxStyle = ({ children }) => <GridBox>{children}</GridBox>

export default GridBoxStyle
