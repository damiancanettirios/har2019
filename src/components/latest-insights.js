import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import GridBox from "./grid-box"

const Card = styled("div")`
  border: 1px solid #e7ecef;
  border-top: 3px solid #8e44ad;
  margin-bottom: 20px;
  padding: 0px;
  max-width: 400px;
  align-self: auto;
`

const LatestInsights = ({ insights }) => (
  <GridBox>
    {insights.map(({ node }) => (
      <Card key={node.id}>
        <Link to={`/insights/${node.slug}`}>
          <Img
            alt={node.imageTitle.title}
            fluid={node.imageTitle.fluid}
            style={{ maxWidth: 400 }}
          />
        </Link>
        <div style={{ padding: 10 }}>
          <Link
            to={`/insights/${node.slug}`}
            style={{ textDecoration: `none` }}
          >
            <h4
              style={{
                fontWeight: `bold`,
                textAlign: `left`,
                fontSize: `1.25rem`,
                paddingBottom: 10,
              }}
            >
              {node.title}
            </h4>
          </Link>
          <p>{node.description.description}</p>
        </div>
      </Card>
    ))}
  </GridBox>
)

export default LatestInsights
