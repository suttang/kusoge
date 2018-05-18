import React, { Component } from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

import OxygenBar from './OxygenBar'

const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
`

const LabelContainer = styled.View`
  width: 80px;
  background: #0f0;
`

const Title = styled.Image`
  width: 80px;
`

const BarContainer = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 20px;
`

export default class OxygenLevel extends Component {

  static propTypes = {
    value: PropTypes.number.isRequired
  }

  static titleResource = require('../resources/gauges/gauge-title-oxygen.png')

  render() {
    const { value } = this.props
    const levels = (new Array(10))
      .fill(0)
      .map((_, index) => index * 10 < value)

    return (
      <Container>
        <LabelContainer>
          <Title source={OxygenLevel.titleResource} />
        </LabelContainer>
        <BarContainer>
          <OxygenBar index="0" on={levels[0]} />
          <OxygenBar index="1" on={levels[1]} />
          <OxygenBar index="2" on={levels[2]} />
          <OxygenBar index="3" on={levels[3]} />
          <OxygenBar index="4" on={levels[4]} />
          <OxygenBar index="5" on={levels[5]} />
          <OxygenBar index="6" on={levels[6]} />
          <OxygenBar index="7" on={levels[7]} />
          <OxygenBar index="8" on={levels[8]} />
          <OxygenBar index="9" on={levels[9]} />
        </BarContainer>
      </Container>
    )
  }
}
