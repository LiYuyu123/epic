import React, {useRef} from 'react';
import {userStores} from '../stores';
import {observer} from 'mobx-react';

const Upload=observer(()=>{
    const ref=useRef()
    const {ImageStore}=userStores()
    const bindOnChange=()=>{
        console.log(ref.current)
        // @ts-ignore
        if(ref.current.files.length>0){
            // @ts-ignore
            ImageStore.setFile(ref.current.files[0])
            //@ts-ignore
            ImageStore.setFile(ref.current.files[0].name)
            ImageStore.upload().then((serverFile)=>{
                console.log('上传成功')
                console.log(serverFile)
            }).catch((error)=>{
                console.log('上传失败')
                console.log(error)
            })
        }
    }
    return (
        <div>
            <h1>上传文件</h1>
            {// @ts-ignore
            <input type="file" ref={ref} onChange={bindOnChange}/> }
        </div>
    )
})
export  default  Upload