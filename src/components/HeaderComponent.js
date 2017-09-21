import React, { Component } from 'react';
import styled from 'styled-components';
import * as palette from '../CssVariables'

const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  background-color: ${palette.PRIMARY_COLOR_1};
  width: 100vw; //calc(100% - 2*${palette.MARGIN_1});
  height: ${palette.HEADER_HEIGHT_1};
`
const Title = styled.h1`
  grid-area: subgrid-header;
  color: ${palette.SECONDARY_COLOR_1};
  font-size: 1vw;
  text-align: left;
  padding: .7vw 1vw;
`
const ButtonGroup = styled.div`
  display: flex;
`
const Button = styled.h2`
  align-self: center;
  // height: 2.5vw;
  color: ${palette.SECONDARY_COLOR_1};
  font-size: 1vw;
  text-align: left;
  padding: .7vw 1vw;
  cursor: pointer;
  border-right: ${palette.MARGIN_1} solid ${palette.SECONDARY_COLOR_1};
  &:hover {
    color: ${palette.PRIMARY_COLOR_1};
    background-color: ${palette.SECONDARY_COLOR_1};
  }
`
class HeaderComponent extends React.Component {

  render() {
    return (
      <Header>
        <Title>Jag är en Header</Title>
        <ButtonGroup>
          <Button>Add Ticket</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
          <Button>Button 4</Button>
        </ButtonGroup>        
      </Header>
    );
  }
}

export default HeaderComponent;
