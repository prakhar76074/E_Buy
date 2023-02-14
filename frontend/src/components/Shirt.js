import React from 'react'
import { Card , Row , Col } from 'antd'

const {Meta} = Card
const Shirt = ({props}) => {
  return (
   <>
   <Row gutter={16}>
       <Col span={8}>
     <Card
    hoverable
    style={{ width: 240 , display : 'flex' }}
  
    cover={<img alt="example" src={props.image} />}
  >
        <p>{props.name}</p>
        <p>{props.gender}</p>
        <p>{props.description}</p>


  </Card>
  </Col>
  </Row>
   </>
  )
}

export default Shirt