import React, { Component } from 'react'
import DisplayNumber from './DisplayNumber'

export default class DisplayRoot extends Component {
  render() {
    return (
      <div>
        <h1>DisplayRoot Root</h1>
        <DisplayNumber number={this.props.number}></DisplayNumber>
      </div>
    )
  }
}