import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";
import { AuthApi } from "../../api/authApi";

export const signup = (formProps, callback) => async dispatch => {
  try {
    // const response = await axios.post(
    //   'http://localhost:3030/api/signup',
    //   formProps
    // );
    const response = await AuthApi.signupUser(formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Email in use" });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await AuthApi.signinUser(formProps);
    console.log("Auth token: ", response.data.token);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
  }
};

export const signout = () => {
  localStorage.removeItem("token");

  return {
    type: AUTH_USER,
    payload: ""
  };
};
