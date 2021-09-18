import {observable, action, makeObservable} from 'mobx';
import {Auth} from '../models/model'

class UserStore {
    constructor() {
        makeObservable(this)
    }
    @observable currentUser = null

    @action pullUser() {
        this.currentUser = Auth.getCurrentUser()
    }

    @action restUser() {
        this.currentUser = null

    }


}

export  default new UserStore()