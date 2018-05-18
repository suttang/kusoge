import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

const Image = styled.Image`
  width: 20px;
  height: 20px;
`

const Container = styled.View`
  position: absolute;
  width: 100px;
  height: 100px;
`

export default class Pollen extends Component {
  render() {
    const style = {
      left: this.props.x,
      top: this.props.y
    }
    return (
      <Container style={style}>
        <Image source={this.props.source}/>
      </Container>
    )
  }
}

Pollen.propTypes = {
  source: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}
