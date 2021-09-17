import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {Button} from 'antd';
import 'antd/dist/antd.css';

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
const Header = () => {
   const [isLogin,setIsLogin]=useState(false)
    return (
        <HeaderStyle>
            <div>logo</div>
            <nav>
                <StyleLink to="/" activeClassName="selected" exact>首页</StyleLink>
                <StyleLink to="/history" activeClassName="selected" exact>上传历史</StyleLink>
                <StyleLink to="/about" activeClassName="selected" exact>关于我</StyleLink>
            </nav>
             <Div>
                 {isLogin ? <>李子杰 <StyleButton type="primary" onClick={()=>setIsLogin(false)}>注销</StyleButton></>:<> <StyleButton type="primary" onClick={()=>setIsLogin(true)}>登录</StyleButton>
                     <StyleButton type="primary">注册</StyleButton></>}
             </Div>
        </HeaderStyle>
    )
}
export default Header