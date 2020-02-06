import React, { Component } from 'react'
import DisplayNumber from '../container/DisplayNumber'

export default class DisplayRoot extends Component {
  render() {
    return (
      <div>
        <h1>DisplayRoot Root</h1>
        <DisplayNumber></DisplayNumber>
      </div>
    )
  }
}