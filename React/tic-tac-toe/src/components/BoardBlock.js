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
    if (this.props.data[this.props.idx].value === "" && this.props.verdict === "") {
      this.setState({
        content: this.props.playerX ? "X" : "O",
      });
      this.props.setPlayer();

      this.props.setData(+this.props.idx, this.props.playerX ? "X" : "O");
      console.log(this.props.data);
    }
    
  }


  render() {
    // console.log(this.props.data);
    return (
      <div className="bb" onClick={this.handleClick}>
        {this.state.content}
      </div>
    );
  }
}
export default BB;
