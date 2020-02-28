type colors = "green" | "blue" | "brown" | "gray"
export interface Cat {
  hair: boolean,
  eyes: colors[],
  legs: number,
  tailLength: number
  bodyLength: number
  headLength: number
}

const makeCat = (): Cat => ({
  hair: true,
  eyes: ["green", "blue"],
  legs: 4,
  tailLength: 50,
  bodyLength: 70,
  headLength: 10,
})
export default makeCat
