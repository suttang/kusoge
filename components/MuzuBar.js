import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
`

const Bar = styled.Image`
  
`

export default class MuzuBar extends Component {

  static propTypes = {
    index: PropTypes.number.isRequired,
    on: PropTypes.bool.isRequired,
  }

  static onResources = [
    require('../resources/gauges/gauge2-1.png'),
    require('../resources/gauges/gauge2-2.png'),
    require('../resources/gauges/gauge2-3.png'),
    require('../resources/gauges/gauge2-4.png'),
    require('../resources/gauges/gauge2-5.png'),
    require('../resources/gauges/gauge2-6.png'),
    require('../resources/gauges/gauge2-7.png'),
    require('../resources/gauges/gauge2-8.png'),
    require('../resources/gauges/gauge2-9.png'),
    require('../resources/gauges/gauge2-10.png'),
  ]

  static offResources = [
    require('../resources/gauges/gauge2-1-off.png'),
    require('../resources/gauges/gauge2-2-off.png'),
    require('../resources/gauges/gauge2-3-off.png'),
    require('../resources/gauges/gauge2-4-off.png'),
    require('../resources/gauges/gauge2-5-off.png'),
    require('../resources/gauges/gauge2-6-off.png'),
    require('../resources/gauges/gauge2-7-off.png'),
    require('../resources/gauges/gauge2-8-off.png'),
    require('../resources/gauges/gauge2-9-off.png'),
    require('../resources/gauges/gauge2-10-off.png'),
  ]

  render() {
    const { index, on } = this.props
    const source = on
      ? MuzuBar.onResources[index]
      : MuzuBar.offResources[index]

    return (
      <Container>
        <Bar source={source}/>
      </Container>
    )
  }
}
