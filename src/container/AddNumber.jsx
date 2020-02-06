import React, { Component } from "react";
import AddNumer from "../components/AddNumber";
import store from "../store";
export default class extends Component {
  render() {
    return (
      <AddNumer
        onClick={function(size) {
          store.dispatch({ type: "INCREMENT", size: size });
        }.bind(this)}
      ></AddNumer>
    );
  }
}
