import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'

// 1154 x 308
const Button = styled.Image`
  width: 288px;
  height: 77px;
  resizeMode: contain;
`

export default class StartButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired
  }

  resourceHover = require('../resources/button_start_on.png')
  resourceBlur = require('../resources/button_start_off.png')

  constructor(props) {
    super(props)

    this.state = {
      isPressing: false
    }
  }

  _handleOnPressIn = () => {
    this.setState({ isPressing: true })
  }

  _handleOnPressOut = () => {
    this.setState({ isPressing: false })
  }

  render() {
    const resource = this.state.isPressing ? this.resourceHover : this.resourceBlur

    return (
      <TouchableWithoutFeedback
        onPress={this.props.onPress}
        onPressIn={this._handleOnPressIn}
        onPressOut={this._handleOnPressOut}
      >
        <Button source={resource} />
      </TouchableWithoutFeedback>
    )
  }
}
