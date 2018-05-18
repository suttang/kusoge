import { Dimensions } from 'react-native'
import { action, computed, observable, configure, transaction } from 'mobx'
import moment from 'moment'

import Pollen from './models/pollen'

configure({ enforceActions: true })

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT
} = Dimensions.get('window')

export default class GameStore {
  @observable isGameRunning = false
  @observable pollens = []
  @observable.ref date = moment()
  @observable days = 0

  @observable monthPerFrame = 60

  // 呼吸中かどうか
  @observable isInBreathing = false

  // おしっぱ
  continuousBreathingCount = 0

  // 酸素残量
  @observable oxygen = 100

  // ムズムズ度
  @observable muzumuzu = 0

  // 花粉出現頻度
  @observable frequency = 0.08

  @action startGame = () => {
    this.isGameRunning = true
    this.pollens = []
    this.date = moment('2000-01-01')
    this.days = 0
    this.oxygen = 100
    this.muzumuzu = 0
    this.isInBreathing = false

    this.tick()
  }

  @action gameOver = () => {
    this.isGameRunning = false
  }

  /**
   * 息を吸う
   */
  @action inBreathe = () => {
    this.continuousBreathingCount = 0
    this.isInBreathing = true
  }

  /**
   * 息を吐く
   */
  @action breatheOut = () => {
    this.isInBreathing = false
  }

  @action tick = () => {
    if (this.oxygen <= 0 || this.muzumuzu >= 100) {
      this.gameOver()
      return
    }

    requestAnimationFrame(this.tick)

    this.days++

    const newDate = moment('2000-01-01').add(this.days, 'days')
    this.date = newDate
    
    this.update()
  }

  /**
   * Update frame data
   */
  update = () => {
    const centerX = SCREEN_WIDTH / 2
    const centerY = SCREEN_HEIGHT / 2

    let focusPoint = { x: undefined, y: undefined }

    // むずむず現象
    if (this.muzumuzu >= 0) {
      this.muzumuzu -= 0.1
    }

    if (this.isInBreathing) {
      this.continuousBreathingCount++
    }

    // 呼吸
    if (this.isInBreathing && this.oxygen < 100) {
      this.oxygen += 0.25
      focusPoint.x = centerX
      focusPoint.y = centerY
    } else {
      // 酸素現象
      this.oxygen -= 0.18
    }

    // 花粉移動
    this.pollens.forEach(pollen => {
      pollen.cruise({ level: this.continuousBreathingCount, ...focusPoint })
      if (this.isInBreathing && pollen.hitTest({ x: centerX, y: centerY, r: 40 })) {
        this.muzumuzu += 20

        // Remove pollen
        pollen.x = -100
      }
    })

    // 左端の花粉削除
    this.pollens = this.pollens.filter(pollen => {
      return pollen.x > 0
    })

    // 花粉出現
    if (Math.random() < this.frequency) {
      this.pollens.push(new Pollen({}))
    }
  }
}