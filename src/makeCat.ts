import {colors} from './constants'

export interface Cat {
  hair: boolean,
  eyes: colors[],
  legs: number,
  tailLength: number
  bodyLength: number
  headLength: number
}

export default function makeCat(): Cat {
  return {
    hair: true,
    eyes: ["green", "blue"],
    legs: 4,
    tailLength: 50,
    bodyLength: 70,
    headLength: 10,
  }
}
