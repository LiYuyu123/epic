import React, {useRef} from 'react';
import {userStores} from '../stores';
import {observer} from 'mobx-react';
import { Upload} from 'antd';
import { InboxOutlined } from '@ant-design/icons';


const { Dragger } = Upload;



const Uploader=observer(()=>{
    const {ImageStore}=userStores()
    const props = {
        showUploadList:false,
        beforeUpload: (file:any) => {
                ImageStore.setFile(file)
                ImageStore.setFileName(file.name)
                ImageStore.upload().then((serverFile)=>{
                    console.log('上传成功')
                    console.log(serverFile)
                }).catch((error)=>{
                    console.log('上传失败')
                    console.log(error)
                })
            return false;
        },
    }

    return (
        <div>
            <Dragger {...props} >
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                </p>
            </Dragger>
            <div>
                <h1>上传结果</h1>
                {
                    ImageStore.serverFile ? <div> {  // @ts-ignore
                        ImageStore.serverFile.attributes.url.attributes.url}</div> : null
                }
            </div>
        </div>
    )
})
export  default  Uploader