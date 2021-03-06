// @flow

import React from 'react';
import styled from 'styled-components';
import { media } from '../styles/media';

const FooterLink = styled.a`
  color: #d8d8d8;
  font-size: 0.875rem;
  margin-right: 1.5rem;
  text-decoration: none;

  ${media.sm`
    margin-left: 1.5rem;
    margin-right: 0;
  `};
`;

export default FooterLink;
