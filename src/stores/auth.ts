import {observable, action, makeObservable} from 'mobx';
import {Auth} from '../models/model'
import UserStore from './user'
class AuthStore {
    constructor() {
        makeObservable(this)
    }
    @observable values = { //登陆信息
        username: '',
        password: ''
    };


    @action setUsername(username: string) {
        this.values.username = username;
    }

    @action setPassword(password: string) {
        this.values.password = password;
    }

    @action login(username:any,password:any) {
    return new Promise((resolve ,reject)=>{
       Auth.login(username,password).then((user)=>{
           UserStore.pullUser()
           resolve(user)
       }).catch((error)=>{
           UserStore.restUser()
           reject(error)
       })
    })
    }

    @action register() {//注册
        return new Promise((resolve ,reject)=>{
          Auth.register(this.values.username,this.values.password).then((user)=>{
              UserStore.pullUser()
              resolve(user)
          }).catch((error)=>{
              UserStore.restUser()
              reject(error)
          })
        })
    }

    @action logout() {//注销
        Auth.logout()
        UserStore.restUser()
    }
}

export default new AuthStore()