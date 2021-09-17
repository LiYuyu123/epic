import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const HeaderStyle = styled.header`
    background: #02101f;
    color: white;
    display: flex;
     padding: 10px 100px;
    align-items: center;
`
const StyleLink = styled(NavLink)`
  margin-left: 34px;
  &.selected{
    border-bottom: 1px solid white;
  }
`
const Header = () => {
    return (
        <HeaderStyle>
            <div>logo</div>
            <nav>
                <StyleLink to="/" activeClassName="selected" exact>首页</StyleLink>
                <StyleLink to="/history" activeClassName="selected" exact>上传历史</StyleLink>
                <StyleLink to="/about" activeClassName="selected" exact>关于我</StyleLink>
            </nav>

        </HeaderStyle>
    )
}
export default Header