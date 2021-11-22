import React from "react";

class Homework1 extends React.Component {
  constructor(props) {
    console.log(props.p1);
    super();
    this.state = {
      s1: props.p1, // присваиваю принятые пропсы в стейт
    };
    this.s2 = 201;
  }

  componentDidMount() {
    this.s2 += 5;
    let value = this.state.s1;
    value += 5;
    this.setState({ s1: value });
  }

  buttonHander = () => {
    this.s2 += 50;
    let value = this.state.s1;
    value += 50;
    this.setState({ s1: value });
  };
  render() {
    console.log(this.state.s1);
    return (
      <>
        <button onClick={this.buttonHander}>Button</button>
        <div>{this.state.s1}</div>
        <div>{this.s2}</div>
      </>
    );
  }
}

export default Homework1;
