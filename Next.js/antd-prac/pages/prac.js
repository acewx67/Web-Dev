import React from 'react'
import {Button} from 'antd'
import { DownOutlined } from '@ant-design/icons'
import {Col,Row} from 'antd'



function index() {
  return (
    <div>
      <Button>abcd</Button>  
      <Button type='primary'>abcd</Button>  
      <Button type='ghost'>abcd</Button>  
      <Button type='dashed'>abcd</Button>  
      <Button type='text'>abcd</Button>  
      <Button type='link' href='http://google.com' target='_blank'>abcd</Button>  
      <Button type='primary' size='small'><DownOutlined /></Button>
      <Row>
        <Col className="ws" span={12}>hdfc</Col>
        <Col className="emm" span={12}>
          <div> abcd</div>
          <div>efrde</div>
        </Col>
      </Row>
    </div>
  )
}
export default index

