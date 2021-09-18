import {observable, action, makeObservable} from 'mobx';
import {Uploader} from '../models/model'

class ImageStore {
    constructor() {
        makeObservable(this)
    }

    @observable fileName= ''
    @observable file=null
    @observable isUploading=false
    @observable serverFile=null

    @action  seFileName(newFileName:string){
        this.fileName=newFileName
    }

    @action setFile(newFile:any){
        this.file=newFile
    }

    @action upload(){
        this.isUploading=true
        return new Promise((resolve,reject)=>{
            Uploader.add(this.file,this.fileName)
                .then(file=>{
                    // @ts-ignore
                    this.serverFile=file
                  resolve(file)
                })
                .catch(error=>{
                    reject(error)
                })
                .finally(()=>{
                    this.isUploading=false
                })
        })
    }



}

export  default new ImageStore()