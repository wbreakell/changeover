// @flow

import React from 'react';
import styled from 'styled-components';
import { media } from '../styles/utilities/media';

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding-left: 25px;
  padding-right: 25px;

  ${media.sm`
    width: 540px;
  `} ${media.md`
    width: 720px;
  `} ${media.lg`
    width: 960px;
  `} ${media.xl`
    width: 1140px;
  `};
`;

export default Content;
