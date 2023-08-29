import { LOGIN_USER,LOGOUT_USER } from "../constants/userContants";

import axios from 'axios'
export const setReduxUserState = (userCreated) =>(dispatch)=>{

    dispatch({
        type:LOGIN_USER,
        payload:userCreated

    })
}

export const logout =()=>(dispatch)=>{
    document.location.href = "/login" //to redirect to login
    axios.get('/api/logout') //to clear cookies
    localStorage.removeItem("userInfo")
    sessionStorage.removeItem("userInfo")
    localStorage.removeItem("cart")

    dispatch({type:LOGOUT_USER})
}