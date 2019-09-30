import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import useMainlogo from "../hooks/use-mainlogo"

const NavLink = styled(Link)`
  color: white;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 1.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  &.current-page {
    border-bottom: 2px solid white;
  }
  &:last-of-type {
    margin-right: 0;
  }
`

const Header = () => {
  const { name, image } = useMainlogo()
  return (
    <header>
      <nav
        css={css`
          position: absolute;
          z-index: 999;
          background: transparent;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 95%;
          margin: 0 auto;
          padding: 0.5rem;
        `}
      >
        <NavLink to="/">
          <img
            src={image.file.url}
            alt={name}
            css={css`
              margin: 0;
              width: 150px;
            `}
          />
        </NavLink>
        <div>
          <NavLink to="/about/" activeClassName="current-page">
            About
          </NavLink>
          <NavLink to="/approach/" activeClassName="current-page">
            Approach
          </NavLink>
          <NavLink to="/programs/" activeClassName="current-page">
            Programs
          </NavLink>
          <NavLink to="/services/" activeClassName="current-page">
            Services
          </NavLink>
          <NavLink to="/insights/" activeClassName="current-page">
            Insights
          </NavLink>
          <NavLink to="/contact/" activeClassName="current-page">
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
