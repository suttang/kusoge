import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { inject } from 'mobx-react/native'

import Pollen from '../../components/Pollen'
import OxygenLevel from '../../components/OxygenLevel'
import MuzuLevel from '../../components/MuzuLevel'

const Container = styled.ImageBackground`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Character = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Face = styled.Image`
`

const ParticleContainer = styled.View`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`

const RetryButton = styled.Button`
`

const ReturnToTopButton = styled.Button`
`

const Indicators = styled.ImageBackground`
  width: 94%;
  margin-top: 30px;
  padding: 20px 16px;
`


@inject(stores => ({
  isGameRunning: stores.game.isGameRunning,
  startGame: stores.game.startGame,
  date: stores.game.date,
  pollens: stores.game.pollens,
  isInBreathing: stores.game.isInBreathing,
  inBreathe: stores.game.inBreathe,
  breatheOut: stores.game.breatheOut,
  oxygen: stores.game.oxygen,
  muzumuzu: stores.game.muzumuzu,
  navigateToHome: stores.router.navigateToHome
}))
export default class Playground extends Component {

  static propTypes = {

  }

  faceBreath = require('../../resources/face1-breathing.png')
  faceNormal = require('../../resources/face1-normal.png')

  componentDidMount() {
    this.props.startGame()
  }

  handleRetry = () => {
    this.props.startGame()
  }

  handleReturnToTop = () => {
    this.props.navigateToHome()
  }

  render() {
    const age = this.props.date.format('Y') - 2000
    const month = this.props.date.format('M')

    const face = this.props.isInBreathing
      ? <Face source={this.faceBreath}/>
      : <Face source={this.faceNormal}/>

    return (
      <Container source={require('../../resources/background_uzumaki.png')}>
        <Indicators source={require('../../resources/gauges/background.png')} resizeMode="contain">
          <OxygenLevel value={this.props.oxygen} />
          <MuzuLevel value={this.props.muzumuzu} />
        </Indicators>
        <Character>
          {face}
          <Text>{age}歳 {month}月</Text>
        </Character>
        <TouchableWithoutFeedback onPressIn={this.props.inBreathe} onPressOut={this.props.breatheOut}>
          <ParticleContainer>
            {this.props.pollens.map((item, index) => (
              <Pollen key={index} source={item.source} x={item.x} y={item.y} />
            ))}
          </ParticleContainer>
        </TouchableWithoutFeedback>
        {!this.props.isGameRunning &&
          <View>
            <RetryButton title="リトライ" onPress={this.handleRetry}/>
            <ReturnToTopButton title="ホーム" onPress={this.handleReturnToTop}/>
          </View>
        }
      </Container>
    )
  }
}
