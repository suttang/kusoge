import React, { Component } from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

import MuzuBar from './MuzuBar'

const Container = styled.View`
  display: flex;
  flex-direction: row;
  `

const LabelContainer = styled.View`
  width: 80px;
  background: #0f0;
`

const BarContainer = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 20px;
`

export default class MuzuLevel extends Component {

  static propTypes = {
    value: PropTypes.number.isRequired
  }

  static titleResource = require('../resources/gauges/gauge-title-muzu.png')

  render() {
    const { value } = this.props
    const levels = (new Array(10))
      .fill(0)
      .map((_, index) => index * 10 < value)

    return (
      <Container>
        <LabelContainer>
          <Image source={MuzuLevel.titleResource} />
        </LabelContainer>
        <BarContainer>
          <MuzuBar index="0" on={levels[0]} />
          <MuzuBar index="1" on={levels[1]} />
          <MuzuBar index="2" on={levels[2]} />
          <MuzuBar index="3" on={levels[3]} />
          <MuzuBar index="4" on={levels[4]} />
          <MuzuBar index="5" on={levels[5]} />
          <MuzuBar index="6" on={levels[6]} />
          <MuzuBar index="7" on={levels[7]} />
          <MuzuBar index="8" on={levels[8]} />
          <MuzuBar index="9" on={levels[9]} />
        </BarContainer>
      </Container>
    )
  }
}
