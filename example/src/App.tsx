/* eslint-disable no-console */

import makeCat from "@local/ts-module-example"
import { hot } from 'react-hot-loader'
import React from 'react'

class App extends React.Component<{}, {}> {
  public render() {
    const myCat =makeCat()
    console.log({myCat})
    const eyeLeft = myCat.eyes[0]
    const eyeRight = myCat.eyes[1]
    return (
      <div>
        <h1>My cat</h1>
        <p>
          <b>Eye Color: </b>
          <span style={{paddingLeft: 10, color: eyeLeft}}>{eyeLeft}</span>
          <span style={{paddingLeft: 10, color: eyeRight}}>{eyeRight}</span>
        </p>
      </div>
    )
  }
}

declare let module: object

export default hot(module)(App)


