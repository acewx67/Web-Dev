import React, { Component } from 'react'

export class Banner extends Component {
    constructor(props){
        super(props)
        const banners = [<h1 key={0}>Banner 1</h1>,<h1 key={1}>Banner 2</h1>,<h1 key={2}>Banner 3</h1>]
        this.state = {
            bannerIndex : 0,
        }
        function goBack(params) {
            console.log(params);
        }
        
    }
    
  render() {
    return (
      <div className='bannerContainer'>
        <div className="backBtn" onClick={()=>{this.goBack(this.state.bannerIndex)}}>{'<'}</div>
        {/* {this.banners[this.state.bannerIndex]} */}
        <div className="nextBtn" onClick={this.goNext}>{'>'}</div>
      </div>
    )
  }
}

export default Banner
