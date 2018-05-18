import React, { Component } from 'react'
import { Provider } from 'mobx-react/native'

import GameStore from './stores/game'
import RouterStore from './stores/router'

import styled from 'styled-components/native'

import App from './containers/App'

const gameStore = new GameStore()
const routerStore = new RouterStore()

// https://hackernoon.com/how-i-built-a-super-simple-game-using-react-native-67bdade50373
// https://github.com/mmazzarolo/tap-the-number

// https://qiita.com/Takepepe/items/59d1396c25c8a699c41c

// Image はこれを使ったほうがいいかも
// https://github.com/DylanVann/react-native-fast-image

const Container = styled.View`
  height: 100%;
`

const GameScreen = styled.Text`

`

export default class GameName extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isStarted: false
    }
  }

  handleStart(e) {
    this.setState({ isStarted: true })
    // this.isStarted = true
    
  }

  render() {
    return (
      <Provider game={gameStore} router={routerStore}>
        <App/>
      </Provider>
    )
  }
}
