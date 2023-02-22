import React, { Component } from "react";
import "./App.css";
import BB from "./components/BoardBlock"
class App extends Component {
  constructor() {
    super();
    this.state = {
      arr: [],
      playerX: true, //true means playerX false means playerO
      winner: "",
      receivedInput: [],
    };
    for (let i = 0; i < 9; i++) this.state.arr.push({ index: i, value: "" });
    this.setPlayerX = this.setPlayerX.bind(this);
    this.setData = this.setData.bind(this);
    this.calcWinner = this.calcWinner.bind(this);
  }
  setPlayerX() {
    this.setState({
      playerX: this.state.playerX ? false : true,
    });
  }
  setData(index, val) {
    console.log(this.state.arr[index].value);
    let t = [...this.state.arr];
    t[index].value = val;
    this.setState({
      arr: t,
    });
    this.calcWinner(this.state.arr);
  }

  calcWinner(arr) {
    if (arr.findIndex((obj) => obj.value === "") === -1) {
      this.setState({ winner: "Match is DRAW" });
    } else {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        let [a, b, c] = lines[i];
        if (
          arr[a].value &&
          arr[a].value === arr[b].value &&
          arr[a].value === arr[c].value
        ) {
          this.setState({ winner: "Winner is Player " + arr[a].value });
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.winner !== "" ? <h1>{this.state.winner}</h1> : null}
        {this.state.playerX ? (
          <h3>Player X 's Turn</h3>
        ) : (
          <h3>Player O 's Turn</h3>
        )}
        <br />
        <div className="board">
          {this.state.arr.map((obj, i) => {
            return (
              <BB
                idx={i}
                data={this.state.arr}
                setData={this.setData}
                playerX={this.state.playerX}
                setPlayer={this.setPlayerX}
                verdict={this.state.winner}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
