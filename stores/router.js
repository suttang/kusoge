import { action, observable } from 'mobx'

export default class RouterStore {
  @observable currentScreen = 'HOME'

  @action
  navigateToHome = () => {
    this.currentScreen = 'HOME'
  }

  @action
  navigateToPlayground = () => {
    this.currentScreen = 'PLAYGROUND'
  }

  @action
  navigateToEndgame = () => {
    this.currentScreen = 'ENDGAME'
  }
}
