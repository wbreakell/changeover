import React from 'react';
import styled from 'styled-components';

const FooterLink = styled.a`
  color: #D8D8D8;
  font-size: 0.875rem;
  margin-right: 1.5rem;
  text-decoration: none;

  @media (min-width: 576px) {
    margin-left: 1.5rem;
    margin-right: 0;
  }

`;

export default FooterLink;
