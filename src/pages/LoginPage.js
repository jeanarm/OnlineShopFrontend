import LoginPageComponent from "./components/LoginPageComponent";

import axios from "axios";

const loginUserApiRequest = async(email,password,doNotLogOut) =>{
  const {data} = await axios.post("/api/users/login",{email,password,doNotLogOut})
  return data
}



const LoginPage = () => {
  
  return  <LoginPageComponent loginUserApiRequest={loginUserApiRequest}/>

};

export default LoginPage;