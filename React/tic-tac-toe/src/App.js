import React, { Component } from "react";
import "./App.css";
import BB from "./components/BoardBlock"
class App extends Component {
  constructor() {
    super();
    this.state = {
      arr: [],
      playerX: true, //true means playerX false means playerO
      winner: undefined,
      receivedInput : [],
    };
    for (let i = 0; i < 9; i++) this.state.arr.push({ index: i, value: undefined });
    this.setPlayerX = this.setPlayerX.bind(this);
    this.setData = this.setData.bind(this);
    // this.restartFunc = this.restartFunc.bind(this);
    this.calcWinner = this.calcWinner.bind(this);
  }
  setPlayerX() {
    this.setState({
      playerX: this.state.playerX ? false : true,
    });
  }
  setData(index, val) {
    let t = [...this.state.arr];
    t[index].value = val;
    this.setState({
      arr: t,
    });
    this.calcWinner(this.state.arr);
    console.log(654);
  }
  // restartFunc() {
  //   let temp = [];
  //   for (let i = 0; i < 9; i++) temp.push({ index: i, value: "" });
  //   // console.log(t);
  //   this.setState({
  //     arr: temp,
  //     playerX: true,
  //   });
  //   console.log(this.state.arr, "this is arr");
  // }
  calcWinner(arr) {
    console.log(arr);
    // if (
    //   (this.state.arr[0].value === this.state.arr[1].value &&
    //     this.state.arr[1].value === this.state.arr[2].value &&
    //     this.state.arr[2].value === "X") ||
    //   (this.state.arr[3].value === this.state.arr[4].value &&
    //     this.state.arr[4].value === this.state.arr[5].value &&
    //     this.state.arr[5].value === "X") ||
    //   (this.state.arr[6].value === this.state.arr[7].value &&
    //     this.state.arr[7].value === this.state.arr[8].value &&
    //     this.state.arr[8].value === "X") ||
    //   (this.state.arr[0].value === this.state.arr[3].value &&
    //     this.state.arr[3].value === this.state.arr[6].value &&
    //     this.state.arr[6].value === "X") ||
    //   (this.state.arr[1].value === this.state.arr[4].value &&
    //     this.state.arr[4].value === this.state.arr[7].value &&
    //     this.state.arr[7].value === "X") ||
    //   (this.state.arr[2].value === this.state.arr[5].value &&
    //     this.state.arr[5].value === this.state.arr[8].value &&
    //     this.state.arr[8].value === "X") ||
    //   (this.state.arr[0].value === this.state.arr[4].value &&
    //     this.state.arr[4].value === this.state.arr[8].value &&
    //     this.state.arr[8].value === "X") ||
    //   (this.state.arr[2].value === this.state.arr[4].value &&
    //     this.state.arr[4].value === this.state.arr[6].value &&
    //     this.state.arr[6].value === "X")
    // ) {
    //   this.setState({ winner: "Winner is Player X" });
    // }
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for(let i = 0; i < lines.length; i++) {
      console.log(i);
      let [a,b,c] = lines[i];
      if (arr[a].value && arr[a].value === arr[b].value && arr[a].value === arr[c].value) {
        console.log('inside if');
        this.setState({winner : "Winner is Player " + arr[a].value});
        console.log(123);
      }
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.winner !== undefined ? <h1>{this.state.winner}</h1> : null}
        {this.state.playerX ? (
          <h3>Player X 's Turn</h3>
        ) : (
          <h3>Player O 's Turn</h3>
        )}
        <br />
        <div className="board">
          {this.state.arr.map((obj, i) => {
            //? doubt  obj,index order or keyword
            return (
              <BB
                idx={i}
                data={this.state.arr}
                setData={this.setData}
                playerX={this.state.playerX}
                setPlayer={this.setPlayerX}
              />
            );
          })}
        </div>
        <div className="restart">
          <br />
          <button onClick={this.restartFunc}>Restart Game</button>
        </div>
      </div>
    );
  }
}

export default App;
