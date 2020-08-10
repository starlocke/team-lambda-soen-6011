import React from "react"
import { Link } from "gatsby"
import { BREAKPOINT } from "../utils/constants"
import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  text-decoration: underline;
  max-width: 1400px;
  padding: 0 3%;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 0 5%;
  }
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 900px;

  @media (max-width: ${BREAKPOINT}px) {
    width: 100%;
  }
`

const RawHomePageLink = () => <Link to="/">&#8592; Back to the Home Page</Link>

export const HomePageLink = () => (
  <Container>
    <Content>
      <RawHomePageLink />
    </Content>
  </Container>
)
