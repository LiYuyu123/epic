import React from 'react';
import {Form, Input, Button} from 'antd';
import styled from 'styled-components';
import  {userStores} from '../stores';
import  {useHistory} from 'react-router-dom'
const Wrapper = styled.div`
  max-width: 600px;
  margin: 30px auto;
  box-shadow: 2px 2px 4px 0 rgb(0, 0, 0, 0.2);
  padding: 20px;

  > .register {
    text-align: center;
    margin-bottom: 30px;
  }
`;
const Login = () => {
    const history=useHistory()
    const {AuthStore}=userStores()
    const onFinish = (values: any) => {
       AuthStore.login(values.username,values.password).then(()=>{
           console.log('登录成功')
           history.push('/')
       }).catch(()=>{
           console.log('登录失败')
           }
       )
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const validator = (rule: any, value: any) =>{
        if (/\W/.test(value)) return Promise.reject('不能出现字母数字下划线以外的字符');
        if(value.length<4 || value.length>10) return Promise.reject('长度为4~10个字符')
        return  Promise.resolve()
    };

    return (
        <Wrapper>
            <h1 className="register">登录</h1>
            <Form
                name="basic"
                labelCol={{span: 4}}
                wrapperCol={{span: 20}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{required: true, message: '请填写用户名'}, {validator}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{required: true, message: '请输入密码!'}, {min: 4, message: '密码最少不能小于4个字符'}, {
                        max: 13,
                        message: '密码最大不能超过13个字符'
                    }]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item wrapperCol={{offset: 4, span: 20}}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </Wrapper>
    );
};
export default Login;