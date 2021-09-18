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




// eslint-disable-next-line import/no-anonymous-default-export
export  {Auth}