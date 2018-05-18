import React, { Component } from 'react'
import { Text, View, Button, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'
import { inject, observer } from 'mobx-react/native'

import styled from 'styled-components/native'

import StartButton from '../components/StartButton'

const Container = styled.ImageBackground`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.Image`
  width: 80%;
`

@inject(stores => ({
  navigateToPlayground: stores.router.navigateToPlayground
}))
@observer
export default class Home extends Component {
  handleStartPress = () => {
    this.props.navigateToPlayground()
  }

  render() {
    return (
      <Container source={require('../resources/background_uzumaki.png')}>
        <Title source={require('../resources/title.png')} resizeMode="contain" />
        <StartButton onPress={this.handleStartPress} />
      </Container>
    )
  }
}
