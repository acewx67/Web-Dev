import React, { Component } from "react";
class BB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      content: this.props.playerX ? "X" : "O",
    });
    this.props.setPlayer();
    this.props.setData(+this.props.idx, this.props.playerX ? "X" : "O");
  }

  render() {
    // console.log("sdf", this.state.content);
    return (
      <div className="bb" onClick={this.handleClick}>
        {this.state.content}
      </div>
    );
  }
}
export default BB;
