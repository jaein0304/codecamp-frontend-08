import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  counterUp() {
    console.log(this.state.count);
    this.setState({
      count: 1,
    });
  }

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.counterUp.bind(this)}>카운트 올리기</button>
      </>
    );
  }
}
