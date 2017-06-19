// @flow

import { injectGlobal } from 'styled-components';

injectGlobal`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background-color: #F7F7F7;
    font-family:
      'Avenir Next',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      Helvetica,
      sans-serif;
    line-height: 1.5;
    margin: 0;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  svg {
    max-height: 100%;
  }
`;
