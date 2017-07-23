// @flow

import React from 'react';
import styled from 'styled-components';
import { media } from '../styles/utilities/media';

const Logo = styled.a`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;

  ${media.md`
    font-size: 2.25rem;
  `};
`;

export default Logo;
