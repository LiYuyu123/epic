import React, {useEffect,useState} from 'react';
import {observer} from 'mobx-react';
import {userStores} from '../stores';

const Login=observer(()=>{
        const {AuthStore}=userStores()
        const [inout,setInput]=useState('')
         useEffect(()=>{
             AuthStore.setUsername(inout)
         },[AuthStore, inout])
        const bindChange=(e:any)=>{
          setInput(e.target.value)
        }
    return(
            <>
                <div>
                    Login:
                    {AuthStore.values.username}
                </div>
                <input onChange={bindChange} value={inout}/>
            </>
        )
    })

export default Login