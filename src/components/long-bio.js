import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons"

//material UI
import IconButton from "@material-ui/core/Button"

const LongBio = ({ longBio }) => {
  const [active, setActive] = useState(false)

  return (
    <>
      {longBio != null ? (
        <div
          style={{
            marginTop: 30,
            background: `#ecf0f1`,
            width: `100%`,
          }}
        >
          <div
            style={{
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `space-between`,
              paddingTop: 5,
              paddingBottom: 5,
            }}
          >
            <p
              style={{
                fontSize: `1.1rem`,
                textAlign: `left`,
                paddingLeft: 5,
              }}
            >
              BACKGROUND
            </p>
            <IconButton onClick={() => setActive(!active)}>
              {!active ? (
                <FontAwesomeIcon icon={faChevronDown} />
              ) : (
                <FontAwesomeIcon icon={faChevronUp} />
              )}
            </IconButton>
          </div>
          {!active ? (
            <section />
          ) : (
            <p
              style={{
                fontSize: `.85rem`,
                textAlign: `left`,
                marginTop: 20,
                paddingLeft: 5,
                paddingRight: 5,
                paddingBottom: 5,
              }}
            >
              {longBio.longBio}
            </p>
          )}
        </div>
      ) : (
        <div style={{ paddingBottom: `3.5rem` }} />
      )}
    </>
  )
}

export default LongBio
