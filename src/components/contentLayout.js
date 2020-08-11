import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { GlobalStyles } from "./globalStyles"
import { BREAKPOINT } from "../utils/constants"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 3%;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 0 5%;
  }
`

const Content = styled.main`
  margin: 0 auto;
  max-width: 900px;

  @media (max-width: ${BREAKPOINT}px) {
    width: 100%;
  }
`

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
