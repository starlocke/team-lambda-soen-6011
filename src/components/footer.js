import React from 'react';
import styled from 'styled-components';
import { BREAKPOINT } from '../utils/constants';

const Container = styled.footer`
  font-size: 17px;
  margin-top: 20vh;
  position: relative;
  bottom: 10vh;
  padding-top: 5vh;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 16px;
  }
`;

export const Footer = () => {
  return (
    <Container>
        SESTOPIA - An Information Intensive Application
    </Container>
  );
};