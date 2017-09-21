import React, { Component } from 'react';
import styled from 'styled-components';
import * as palette from '../CssVariables'
import TicketComponent from './TicketComponent.js'

const Row = styled.div`
  grid-area: row;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${palette.PRIMARY_COLOR_1};
  width: calc(20vw - ${palette.MARGIN_1});
  height: calc(100vh - ${palette.MARGIN_1} - 2*${palette.MARGIN_1});
  margin: ${palette.MARGIN_1} ${props => props.marginRight ? palette.MARGIN_1 : 0} 0 0;
`

const Title = styled.h1`
  color: ${palette.SECONDARY_COLOR_1};
  font-size: 2vw;
  text-align: center;
`

class RowComponent extends React.Component {

  render() {
    return (
      <Row marginRight={this.props.marginRight}>
        <Title>HEJHOPP</Title>
        <TicketComponent/>
      </Row>
    );
  }
}

export default RowComponent;
