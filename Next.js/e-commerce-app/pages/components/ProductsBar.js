import React, { Component } from 'react'
import Image from 'next/image'
export class ProductsBar extends Component {
  render() {
    return (
      <div className='productBar'>
        <div className="electronics"><Image src={'/elecLogo.webp'} alt='eleclogo' width={81} height={64}/>Electronics</div>
        <div className="men"><Image src={'/menLogo.jpg'} className='menLogo' alt='eleclogo' width={81} height={64}/>Men's Clothing</div>
        <div className="women"><Image src={'/elecLogo.webp'} alt='eleclogo' width={81} height={64}/>Women's Clothing</div>
        <div className="jewelery"><Image src={'/elecLogo.webp'} alt='eleclogo' width={81} height={64}/>Jewelery</div>
      </div>
    )
  }
}

export default ProductsBar
