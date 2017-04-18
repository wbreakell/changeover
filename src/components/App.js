import React from 'react';
import Copyright from './Copyright';
import FlexContainer from './FlexContainer';
import FlexItem from './FlexItem';
import Footer from './Footer';
import FooterLink from './FooterLink';
import Header from './Header';
import Headline from './Headline';
import Logo from './Logo';
import Wrapper from './Wrapper';

const App = () => (
  <div>
    <Header>
      <Wrapper>
        <Logo href="#">C</Logo>
        <Headline>Simplified Foreign Currency</Headline>
      </Wrapper>
    </Header>
    <Footer>
      <Wrapper>
        <FlexContainer
          flexDirectionXS="column"
          flexDirectionSM="row"
          justifyContentSM="space-between"
        >
          <FlexItem orderXS="2" orderSM="1">
            <Copyright>© {new Date().getFullYear()} Walter Breakell</Copyright>
          </FlexItem>
          <FlexItem orderXS="1" orderSM="2">
            <FooterLink href="https://github.com/wbreakell/changeover">
              GitHub
            </FooterLink>
            <FooterLink href="https://github.com/wbreakell/changeover/blob/master/LICENSE">
              License
            </FooterLink>
          </FlexItem>
        </FlexContainer>
      </Wrapper>
    </Footer>
  </div>
);

export default App;
