import React from 'react';
import {observer} from 'mobx-react';
import Uploader from '../components/Upload';
import Tips from '../components/Tips';

const Home = observer(()=>{
    return (
        <div>
            <Tips>请先登录在上传！！！</Tips>
            <Uploader/>
        </div>
    )
})
export default Home