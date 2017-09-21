import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import * as palette from './CssVariables'
import RowComponent from './components/RowComponent.js'
import HeaderComponent from './components/HeaderComponent.js'


const MainApp = styled.div`
  grid-template-areas:
    'header header header header header'
    'rowContainer rowContainer rowContainer rowContainer rowContainer';
  height: calc(100vh);
  overflow: hidden;
  background-color: ${palette.SECONDARY_COLOR_1};
`

const RowContainer = styled.div`
  grid-area: RowContainer;
  display: flex;
  align-items: stretch;
`
class App extends Component {
  render() {
    return (
      <MainApp>
        <HeaderComponent/>
        <RowContainer>       
          <RowComponent marginRight={true}/>
          <RowComponent marginRight={true}/>
          <RowComponent marginRight={true}/>
          <RowComponent marginRight={true}/>
          <RowComponent marginRight={false}/>
        </RowContainer>
      </MainApp>
    );
  }
}

export default App;
