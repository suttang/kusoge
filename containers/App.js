import React, { Component } from 'react'
import { StatusBar, SafeAreaView, View, Button } from 'react-native'
import { inject, observer } from 'mobx-react/native'

import Home from './Home'
import Playground from './Playground/index'

import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
`

@inject(stores => ({
  currentScreen: stores.router.currentScreen,
  navigateToHome: stores.router.navigateToHome,
  navigateToPlayground: stores.router.navigateToPlayground,
  navigateToEndgame: stores.router.navigateToEndgame
}))
@observer
export default class App extends Component {
  static defaultProps = {
    currentScreen: 'HOME'
  }

  handleHomePress = (event) => {
    this.props.navigateToPlayground()
  }

  handlePlaygroundPress = (event) => {
    this.props.navigateToEndgame()
  }

  handleEndGamePress = (event) => {
    this.props.navigateToHome()
  }

  render() {
    let content
    switch (this.props.currentScreen) {
      case 'HOME':
        content = <Home />
        break
      case 'PLAYGROUND':
        content = <Playground />
        break
      case 'ENDGAME':
        content = <Button title="TO_HOME" onPress={this.handleEndGamePress}/>
        break
      default:
        content = <View/>
    }
    return (
      <Container>
        <StatusBar hidden={true} />
        {content}
      </Container>
    )
  }
}

// <SafeAreaView style={{ flex: 1 }}>
// </SafeAreaView>
