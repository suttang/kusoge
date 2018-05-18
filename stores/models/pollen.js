import { Dimensions } from 'react-native'

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT
} = Dimensions.get('window')

export default class Pollen {
  constructor({ source, x, y }) {
    this.source = source || require('../../resources/pollen1.png')
    this.x = x || SCREEN_WIDTH
    this.y = y || SCREEN_HEIGHT * Math.random()

    this.vx = -(Math.random() * 2) + 1
    this.vy = -(Math.random() * 2) + 1
  }
  
  cruise = ({ x, y, level }) => {
    const scale = level <= 0 ? 0 : (level > 100 ? 100 : level) / 20

    this.vx -= 0.04

    if (typeof y !== 'undefined') {
      this.vy -= (this.y - y) / 1000 * scale
    }
    if (typeof x !== 'undefined') {
      this.vx -= (this.x - x) / 1000 * scale
    }

    this.x += this.vx
    this.y += this.vy
  }

  hitTest = ({ x, y, r }) => {
    return ((x - this.x) ** 2 + (y - this.y) ** 2) < r ** 2
  }
}