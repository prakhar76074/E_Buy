import React from 'react'
import collections from '../collections'
import Shirt from '../components/Shirt'
import { Col , Row } from 'antd'
const HomeScreen = () => {
  
  return (
  <>
 <Row>
 {collections.map((collection) => (
     <div>
         <Col span ={8} style={{marginRight:20}}>
      <Shirt props={collection} />
      </Col>
     </div>
 ))}
 </Row>
  </>
  )
}

export default HomeScreen