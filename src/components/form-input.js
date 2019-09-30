import React from "react"
import styled from "@emotion/styled"

const Box = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`

const TextInput = styled("input")`
  height: 40px;
  font-size: 18px;
  width: 400px;
  align-self: auto;
  border: 1px solid grey;
`

const LongInput = styled("textarea")`
  height: 200px;
  font-size: 18px;
  width: 400px;
  align-self: auto;
  border: 1px solid grey;
`

const FormInput = ({ label, textarea }) => (
  <Box>
    <h3>{label}</h3>
    {textarea ? <LongInput /> : <TextInput />}
  </Box>
)

export default FormInput
