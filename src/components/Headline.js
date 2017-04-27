import React from 'react';
import styled from 'styled-components';
import { media } from '../styles/utilities/media';

const Headline = styled.h1`
  color: #FFF;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 6rem;
  margin-top: 2rem;

  ${media.md`
    font-size: 2.25rem;
    margin-bottom: 8rem;
    margin-top: 4rem;
  `}
`;

export default Headline;
