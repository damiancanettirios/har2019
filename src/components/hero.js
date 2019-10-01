import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import useBackgroundpoint from "../hooks/use-backgroundpoint"

const ImageBackground = styled(BackgroundImage)`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  /* override the default margin for sibling elements  */
  + * {
    margin-top: 0;
  }
`

const TextBox = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  margin: 0 auto;
  justify-content: flex-end;
  padding: 10rem 0 14rem 0;
  width: 95%;
  color: white;
  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.5rem;
    margin: 0 auto;
    color: white;

    @media (min-width: 701px) {
      font-size: 4rem;
    }
  }
  h2 {
    color: white;
    padding: 1rem 2rem;
  }
  p,
  a {
    color: white;
    margin-top: 0;
  }
  a {
    margin-top: 0.5rem;
  }
`

const Hero = ({ heroImage, heroContent }) => {
  const { imageTitle } = useBackgroundpoint()

  return (
    <ImageBackground Tag="section" fluid={heroImage.fluid} fadeIn="soft">
      <div
        css={css`
          background-image: url(${imageTitle.file.url}),
            linear-gradient(0.5turn, #2c3550, #2c3550bb, #2c3550);
          background-position: center bottom, top left;
          background-attachment: scroll, scroll;
          background-repeat: repeat-x, repeat;
          background-size: 3200px 280px, auto;
          height: 100%;
          width: 100vw;
        `}
      >
        <TextBox>
          <h1>{heroContent.title}</h1>
          <h2>{heroContent.shortDescript.shortDescript}</h2>
          {heroContent.page === "Home" ? (
            <h2>
              <Link
                to={`/${heroContent.ctaPage}`}
                css={css`
                  text-decoration: none;
                  &:hover {
                    color: #009688;
                    text-decoration: underline;
                  }
                `}
              >
                {heroContent.cta}&rarr;
              </Link>
            </h2>
          ) : (
            <section />
          )}
        </TextBox>
      </div>
    </ImageBackground>
  )
}

export default Hero
