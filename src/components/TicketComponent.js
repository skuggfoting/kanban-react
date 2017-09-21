import React, { Component } from 'react';
import styled from 'styled-components';
import * as palette from '../CssVariables'

const Ticket = styled.div`
  background-color: ${palette.SECONDARY_COLOR_1};
  width: calc(20vw - 3*${palette.MARGIN_1});
//   width: calc(19.9vw);  
  height: 10vw;
//   margin: ${palette.MARGIN_1};
  cursor: move;
  &:hover {
    width: 20.5vw;
    height: 10.5vw;
    background-color: #D0D3D7;
    // opacity: .8;
  }
`
const Title = styled.h2`
  color: ${palette.PRIMARY_COLOR_1};;
  font-size: 1vw;
  text-align: center;
`
class TicketComponent extends React.Component {

  render() {
    return (
      <Ticket>
        <Title>Jag är en Ticket</Title>
      </Ticket>
    );
  }
}

export default TicketComponent;
