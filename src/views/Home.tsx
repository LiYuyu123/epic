import React from 'react';
import {observer} from 'mobx-react';
import {userStores} from '../stores';
import Uploader from '../components/Upload';

const Home = observer(()=>{
    const {UserStore}=userStores()
    return (
        <div>
            {UserStore.currentUser? <div>{// @ts-ignore
                UserStore.currentUser.attributes.username}</div> : '用户没有登录'}
            <Uploader/>
        </div>
    )
})
export default Home