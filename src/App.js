import React, { Component } from "react";
import reactDom from "react-dom";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }
//   componentDidMount() {
//     this.timerID = setInterval(() => {
//       this.tick();
//     }, 1000);
//     console.log("didm");
//   }
//   componentWillMount() {
//     clearInterval(this.timerID);
//     console.log("wilm");
//   }
//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//     console.log("tick");
//   }

//   render() {
//     return (
//       <div>
//         <h1>hozirgi vaqt: {this.state.date.toLocaleTimeString()}</h1>
//       </div>
//     );
//   }
// }

export default class App extends Component {
  short = (sound, ev) => {
    alert(sound + ev.type);
  };
  render() {
    return (
      <div>
        <button onClick={(ev) => this.short("BEEP!", ev)}>Signal Click</button>
      </div>
    );
  }
}
