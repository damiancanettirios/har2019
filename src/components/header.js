import React, { useState } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import GridBox from "../components/grid-box"
import useMainlogo from "../hooks/use-mainlogo"

// material UI components
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import IconButton from "@material-ui/core/Button"
import withWidth, { isWidthUp } from "@material-ui/core/withWidth"

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

function ListItemLink(props) {
  return <ListItem button component={Link} {...props} />
}

const Header = ({ width }) => {
  const { name, image } = useMainlogo()
  const [open, setOpen] = useState(false)

  const fullList = (
    <div style={{ margin: `auto` }}>
      <List component="nav">
        {[
          "about",
          "approach",
          "programs",
          "services",
          "insights",
          "contact",
        ].map((text, index) => (
          <ListItemLink key={text} to={`/${text}`}>
            <ListItemText
              primary={text}
              style={{ textTransform: `uppercase` }}
            />
          </ListItemLink>
        ))}
      </List>
    </div>
  )

  return (
    <header
      css={css`
        width: 95vw;
      `}
    >
      <div
        css={css`
          position: absolute;
          z-index: 999;
          background: transparent;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 100%;
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
              width: 125px;

              @media (min-width: 701px) {
                width: 150px;
              }
            `}
          />
        </NavLink>
        {isWidthUp("md", width) ? (
          <Hidden smDown>
            <GridBox>
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
            </GridBox>
          </Hidden>
        ) : (
          <IconButton onClick={() => setOpen(true)}>
            <FontAwesomeIcon icon={faBars} style={{ color: `white` }} />
          </IconButton>
        )}
        <Drawer
          anchor="top"
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClose={() => setOpen(false)}
            onKeyDown={() => setOpen(false)}
          >
            {fullList}
          </div>
        </Drawer>
      </div>
    </header>
  )
}

export default withWidth()(Header)
