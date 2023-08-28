import { LOGIN_USER } from "../constants/userContants";


export const setReduxUserState = (userCreated) =>(dispatch)=>{

    dispatch({
        type:LOGIN_USER,
        payload:userCreated

    })
}