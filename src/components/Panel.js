import React from 'react';
import styled from 'styled-components';
import { media } from '../styles/utilities/media';

const Panel = styled.div`
  background-color: #FFF;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  margin: -10vh auto 5rem;
  padding: 1.5rem;

  ${media.md`
    flex-flow: row nowrap;
    padding: 1.5rem 2rem;
  `}
`;

export default Panel;
