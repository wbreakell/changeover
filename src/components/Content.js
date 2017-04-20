import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding-left: 25px;
  padding-right: 25px;

  @media (min-width: 576px) {
    width: 540px;
  }

  @media (min-width: 768px) {
    width: 720px;
  }

  @media (min-width: 992px) {
    width: 960px;
  }

  @media (min-width: 1200px) {
    width: 1140px;
  }
`;

export default Content;
