import React from 'react';
import Container from './Container';
import Header from './Header';
import Headline from './Headline';
import Logo from './Logo';

const App = () => (
  <Header>
    <Container>
      <Logo href="#">C</Logo>
      <Headline>Simplified Foreign Currency</Headline>
    </Container>
  </Header>
);

export default App;
