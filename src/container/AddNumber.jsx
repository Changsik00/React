import React, { Component } from "react";
import AddNumer from "../components/AddNumber";
import {connect} from 'react-redux'

function mapDispatchToProps(dispatch) {
  return {
    onClick: function(size) {
      dispatch({ type: "INCREMENT", size: size });
    }
  }
}

export default connect(null, mapDispatchToProps)(AddNumer)

// export default class extends Component {
//   render() {
//     return (
//       <AddNumer
//         onClick={function(size) {
//           store.dispatch({ type: "INCREMENT", size: size });
//         }.bind(this)}
//       ></AddNumer>
//     );
//   }
// }
