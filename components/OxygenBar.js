import React, { Component } from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

export default class OxygenBar extends Component {

  static propTypes = {
    index: PropTypes.number.isRequired,
    on: PropTypes.bool.isRequired,
  }

  static onResources = [
    require('../resources/gauges/gauge1-1.png'),
    require('../resources/gauges/gauge1-2.png'),
    require('../resources/gauges/gauge1-3.png'),
    require('../resources/gauges/gauge1-4.png'),
    require('../resources/gauges/gauge1-5.png'),
    require('../resources/gauges/gauge1-6.png'),
    require('../resources/gauges/gauge1-7.png'),
    require('../resources/gauges/gauge1-8.png'),
    require('../resources/gauges/gauge1-9.png'),
    require('../resources/gauges/gauge1-10.png'),
  ]

  static offResources = [
    require('../resources/gauges/gauge1-1-off.png'),
    require('../resources/gauges/gauge1-2-off.png'),
    require('../resources/gauges/gauge1-3-off.png'),
    require('../resources/gauges/gauge1-4-off.png'),
    require('../resources/gauges/gauge1-5-off.png'),
    require('../resources/gauges/gauge1-6-off.png'),
    require('../resources/gauges/gauge1-7-off.png'),
    require('../resources/gauges/gauge1-8-off.png'),
    require('../resources/gauges/gauge1-9-off.png'),
    require('../resources/gauges/gauge1-10-off.png'),
  ]

  render() {
    const { index, on } = this.props
    const source = on
      ? OxygenBar.onResources[index]
      : OxygenBar.offResources[index]

    return (
      <Image source={source} resizeMode="contain"/>
    )
  }
}
