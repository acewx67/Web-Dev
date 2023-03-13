import { Button } from 'antd';
import 'antd/dist/reset.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import ProductsBar from './components/ProductsBar'
import Banner from './components/Banner'

export default class Index extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <>
      <Navbar/>
      <ProductsBar/>
      <Banner/>
      <Button style={{backgroundColor:'red'}}>ViewMore</Button>
      </>
    )
  }
}
