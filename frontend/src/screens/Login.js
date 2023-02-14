import React from 'react'
import '../styles/RegisterStyle.css'

import {Form, Input , message , Button} from 'antd'
const Login = () => {
    const onFinish = (values) => {
        
        console.log(values)
    }
  return (
   <>
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
     
       <Form.Item 
       label="Email"
       name="email"
       rules={[
         {
           required: true,
           message: 'Please input your Email',
         },
       ]}
      >
       <Input />
      </Form.Item>
      <Form.Item 
       label="Password"
       name="password"
       rules={[
         {
           required: true,
           message: 'Please input your password!',
         },
       ]}
      >
       <Input.Password />
      </Form.Item>
      
      
      <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
   
   </>
  )
}

export default Login

