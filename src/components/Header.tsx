import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {Button} from 'antd';
import {userStores} from '../stores';
import {observer} from  'mobx-react'
import  {useHistory} from 'react-router-dom'

const HeaderStyle = styled.header`
    background: #02101f;
    color: white;
    display: flex;
    padding: 10px 100px;
    align-items: center;
    !important;
`
const StyleLink = styled(NavLink)`
  margin-left: 34px;
  &.selected{
    border-bottom: 1px solid white;
  }
`
const Div=styled.div`
margin-left: auto;
`
const StyleButton=styled(Button)`
margin-left: 10px;
`

const Header =observer(()=>{
    const {UserStore,AuthStore}=userStores()
    const history=useHistory()
    const handleLogin=()=>{
        console.log('登录')
        history.push('/login')
    }
    const handleLogout=()=>{
        console.log('1')
        AuthStore.logout()
    }
    const handleRegister=()=>{
        console.log('注册')
        history.push('/register')
    }

    return (
        <HeaderStyle>
            <div>logo</div>
            <nav>
                <StyleLink to="/" activeClassName="selected" exact>首页</StyleLink>
                <StyleLink to="/history" activeClassName="selected" exact>上传历史</StyleLink>
                <StyleLink to="/about" activeClassName="selected" exact>关于我</StyleLink>
            </nav>
             <Div>
                 { // @ts-ignore
                    UserStore.currentUser ? <>{// @ts-ignore
                        UserStore.currentUser.attributes.username}<StyleButton type="primary" onClick={handleLogout}>注销</StyleButton></>
                        :<> <StyleButton type="primary" onClick={handleLogin}>登录</StyleButton><StyleButton type="primary" onClick={handleRegister}>注册</StyleButton></>}
             </Div>
        </HeaderStyle>
    )
})
export default Header