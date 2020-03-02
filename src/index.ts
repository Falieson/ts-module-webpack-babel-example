export {default} from './makeCat'
// workaround for  export type {Cat} from './Cat.types'
import {Cat as tsdCat} from './Cat.types'
export type Cat = tsdCat 
export {default as CreateCat} from './CreateCat'
