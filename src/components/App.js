import React from 'react';
import Content from './Content';
import Copyright from './Copyright';
import FlexContainer from './FlexContainer';
import FlexItem from './FlexItem';
import Footer from './Footer';
import FooterLink from './FooterLink';
import Header from './Header';
import Headline from './Headline';
import Logo from './Logo';

const App = () => (
  <div>
    <Header>
      <Content>
        <Logo href="#">C</Logo>
        <Headline>Simplified Foreign Currency</Headline>
      </Content>
    </Header>
    <Footer>
      <Content>
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
      </Content>
    </Footer>
  </div>
);

export default App;
