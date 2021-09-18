import {createContext, useContext} from 'react';
import AuthStore from './auth';
import UserStore from './user'

const context=createContext({
    AuthStore,
    UserStore
})

// eslint-disable-next-line react-hooks/rules-of-hooks
export  const userStores=()=>useContext(context)