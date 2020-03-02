import { Cat } from './Cat.types'

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
