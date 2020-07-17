import { createGlobalStyle } from 'styled-components';

import { BREAKPOINT } from '../utils/constants';

export const GlobalStyles = createGlobalStyle`
  :root {
    --sides-padding-desktop: 3%;
    --sides-padding-mobile: 5%;
  }

  @font-face {
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-display: block;
    font-style: normal;
    font-weight: 700;
  }
  
  html {
    font-family: sans-serif;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  a:active,
  a:hover {
    outline-width: 0;
  }

  body {
    background-color: var(--light-color);
    color: var(--dark-color);
    font-size: 19px;
    font-weight: 400;
    height: 100%;
    padding-top: 20vh;

  @media (max-width: ${BREAKPOINT}px) {
      font-size: 17px;
      padding-top: 15vh;
    }
  }

  /* CSS Reset */

  /* Box sizing rules */
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  /* Set core body defaults */
  body {
    line-height: 1.5;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    display: block;
    max-width: 100%;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
