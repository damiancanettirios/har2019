import React from "react"
import { Global, css } from "@emotion/core"
import Helmet from "react-helmet"
import Footer from "./footer"
import Contact from "./contact"

import Header from "../components/header"

import useSiteMetadata from "../hooks/use-sitemetadata"

const Layout = ({ children, pageTitle, heroImage, heroContent }) => {
  const { title, description } = useSiteMetadata()
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          html,
          body {
            margin: 0;
            overflow-x: hidden;
            color: #555;
            font-family: "Raleway", BlinkMacSystemFont, "Segoe UI", Roboto,
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";
            font-size: 18px;
            line-height: 1.4;
            /* remove margin for the main div that Gatsby mounts into */
            > div {
              margin-top: 0;
            }
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;
            text-align: center;
            + * {
              margin-top: 0.5rem;
            }
          }
          strong {
            color: #222;
          }
          li {
            margin-top: 0.25rem;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{pageTitle + " | " + title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 0 auto;
          top: 0;
          left: 0;
          right: 0;
          position: relative;
        `}
      >
        {children}
      </main>
      <Contact />
      <Footer />
    </>
  )
}

export default Layout
