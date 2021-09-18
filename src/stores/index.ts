import {createContext, useContext} from 'react';
import AuthStore from './auth';
import UserStore from './user'
import ImageStore from './image'
const context=createContext({
    AuthStore,
    UserStore,
    ImageStore
})

// eslint-disable-next-line react-hooks/rules-of-hooks
export  const userStores=()=>useContext(context)