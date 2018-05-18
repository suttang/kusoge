import React, { Component } from 'react'
import styled from 'styled-components/native'
import * as Animatable from 'react-native-animatable'

// const MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent)

const Container = styled.View`
  background: rgba(0, 0, 0, 1.55)
`

const Box = styled.View`
  width: 50px;
  height: 50px;
  background: #ff0;
`

export default class Play extends Component {
  render() {
    return (
      <Container>
        <Box/>
        <Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text>
        <Animatable.Text animation="slideInDown" iterationCount={5} direction="alternate">Up and down you go</Animatable.Text>
        <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>❤️</Animatable.Text>
      </Container>
    )
  }
}