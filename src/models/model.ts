

const AV = require('leancloud-storage');
const {  User } = AV;

AV.init({
    appId: 'FjuPQyoqWk1EdUBVugdxsIBL-gzGzoHsz',
    appKey: 'aqHQvSqesidH98EpvQA8kczi',
    serverURL: 'https://fjupqyoq.lc-cn-n1-shared.com'
});


const Auth={
    register(username: any, password: any){
        return new Promise((resolve,reject)=>{
            const user = new User();
            user.setUsername(username);
            user.setPassword(password);
            user.signUp().then((loginedUser: unknown)=> {
               resolve(loginedUser)
            }, (error: any) => {
                reject(error)
            })
        })
    },
    login(username: any, password: any){
        return new Promise((resolve,reject)=>{
            User.logIn(username, password).then( (loginedUser: unknown)=> {
                resolve(loginedUser)
            },  (error: any)=> {
                reject(error)
            });
        })
    },
    logout(){
        User.logOut();
    },
    getCurrentUser(){
     return User.current()
    }
}
const Uploader={
    add(file:any,fileName:any){
        const item=new AV.Object('Image')
        const avFile=new AV.File(fileName,file)
        item.set('title',fileName)
        item.set('owner',AV.User.current())
        item.set('url',avFile)
        return new Promise((resolve,reject)=>{
            item.save().then((serverFile:any)=>{
                resolve(serverFile)
            },(error:any)=>{
                reject(error)
            })
        })
    }
}



// eslint-disable-next-line import/no-anonymous-default-export
export  {Auth,Uploader}