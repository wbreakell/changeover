import React from 'react';
import styled from 'styled-components';

const Headline = styled.h1`
  color: #FFF;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 6rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 8rem;
    margin-top: 4rem;
  }
`;

export default Headline;
