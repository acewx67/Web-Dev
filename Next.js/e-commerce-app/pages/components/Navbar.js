import React, { Component } from 'react'
import Image from 'next/image'
export class Navbar extends Component {
  render() {
    return (
      <>
      <div className="navbar">
        <div className="logo">
        <Image
          className="logoImg"
          src={"/logo.png"}
          width={150}
          height={60}
          alt="logo"
        />
        </div>
        <div className="search">
          <input type="text" className='searchBar' placeholder=' &#128269; Search for products,brands and more' /> 
        </div>
        <div className="cart">
          <Image className="cartLogo" src={'/cart.png'} alt='cart' width={100} height={100}/>
        </div>
       
      </div>
    </>
    )
  }
}

export default Navbar
