import LoginPageComponent from "./components/LoginPageComponent";

import axios from "axios";
import { setReduxUserState } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";

const loginUserApiRequest = async (email, password, doNotLogout) => {
  const { data } = await axios.post("/api/users/login", {
    email,
    password,
    doNotLogout,
  });
  console.log(data)
  if(data.loggedInUser.doNotLogout) localStorage.setItem("userInfo",JSON.stringify(data.loggedInUser))
  else sessionStorage.setItem("userInfo",JSON.stringify(data.loggedInUser))
  return data;
};

const LoginPage = () => {
  const reduxDispatch = useDispatch();

  return (
    <LoginPageComponent
      loginUserApiRequest={loginUserApiRequest}
      reduxDispatch={reduxDispatch}
      setReduxUserState={setReduxUserState}
    />
  );
};

export default LoginPage;
