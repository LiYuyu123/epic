import React from 'react';
import {userStores} from '../stores';
import {observer} from 'mobx-react';
import styled from 'styled-components';


const Div=styled.div`
  background: orange;
  padding: 10px;
  margin: 30px 0;
  border-radius: 4px;
  color: white;
`
const Tips=observer((props:any)=>{
    const {UserStore}=userStores()
    return (
        <div>
            {
            UserStore.currentUser ? null :<Div>{props.children}</Div>
            }
        </div>

    )
})
export default Tips