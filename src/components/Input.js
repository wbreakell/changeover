import React from 'react';
import styled from 'styled-components';
import { media } from '../styles/utilities/media';

const Input = styled.input`
  background-color: #f9f9f9;
  border: 0;
  color: #40434b;
  font-size: 2.25rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1rem;
  width: 100%;

  ${media.md`
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 0;
  `};
`;

export default Input;
