import {observable, action} from 'mobx';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class AuthStore {
    @observable isLogin = false; //是否登录
    @observable isLoading = false; //是否在等待
    @observable values = { //登陆信息
        username: '',
        password: ''
    };

    @action setIsLogin(isLogin: boolean) {
        this.isLogin = isLogin;
    }

    @action setUsername(username: string) {
        this.values.username = username;
    }

    @action setPassword(password: string) {
        this.values.password = password;
    }

    @action login() {
        console.log('登录中..');
        this.isLoading = true;
        setTimeout(() => {
            console.log('登录成功');
            this.isLogin = true;
            this.isLoading = false;
        }, 3000);
    }

    @action register() {//注册
        console.log('注册中..');
        this.isLoading = true;
        setTimeout(() => {
            console.log('注册成功');
            this.isLogin = true;
            this.isLoading = false;
        }, 3000);
    }

    @action logout() {//注销
        console.log('以注销');
    }
}

export {AuthStore}