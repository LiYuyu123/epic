import {createContext, useContext} from 'react';
import {AuthStore} from './auth';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const context=createContext({
    AuthStore:new AuthStore()
})
// eslint-disable-next-line react-hooks/rules-of-hooks
export  const userStores=()=>useContext(context)