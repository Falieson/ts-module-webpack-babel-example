/* eslint-disable no-console */

import makeCat, {CreateCat} from "@local/ts-module-example"
import { hot } from 'react-hot-loader'
import React from 'react'

console.log({makeCat, CreateCat})

interface State {
  error: any
  myCat: any
  myOtherCat: any
}

class App extends React.Component<{}, State> {
  state = {
    error: {},
    myCat: {},
    myOtherCat: {}
  }

  async componentDidMount() {
    //  myCat
    let myCatData
    try {
      myCatData = makeCat()
      const myCat = {
        data: myCatData,
        left:  myCatData.eyes[0],
        right: myCatData.eyes[1],
      }
      console.log({myCat})
    this.setState({myCat})
  } catch (error) {
      this.setState({error: {
        message: error.message,
        stack: error.stack,
      }})
    }
    

    //  myOtherCat
    let myOtherCatConstruct
    try {
      myOtherCatConstruct = new CreateCat()
    const myOtherCatData = myOtherCatConstruct.data
    const myOtherCat = {
      data: myOtherCatData,
      left:  myOtherCatData.eyes[0],
      right: myOtherCatData.eyes[1],
    }
    console.log({myOtherCat})
    this.setState({myOtherCat})
  } catch (error) {
      this.setState({error: {
        message: error.message,
        stack: error.stack,
      }})
    }
  }
  public render() {
    const {myCat, myOtherCat, error} = this.state


    const MyCatElm = () => <>
    <h1>My cat</h1>
    <p>
      <b>Eye Color: </b>myCat.
      <span style={{paddingLeft: 10, color: myCat.left}}>{myCat.left}</span>
      <span style={{paddingLeft: 10, color: myCat.right}}>{myCat.right}</span>
    </p>
    </>

    const MyOtherCatElm = () => <>
    <h1>My OTHER cat</h1>
    <p>

      <b>Eye Color: </b>myCat.
      <span style={{paddingLeft: 10, color: myOtherCat.left}}>{myOtherCat.left}</span>
      <span style={{paddingLeft: 10, color: myOtherCat.right}}>{myOtherCat.right}</span>
    </p>
    </>

    return (
      <div>
        {Object.keys(error).length > 0 ? (
          <p style={{border: '2px solid red', overflow: "auto"}}>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </p>
        ) : null}
        <MyCatElm />
        <MyOtherCatElm />
      </div>
    )
  }
}

declare let module: object

export default hot(module)(App)


