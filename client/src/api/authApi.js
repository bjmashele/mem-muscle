import { HttpClient } from "./httpClient";

// This is the API. The backend root URL can be set from here.

//const AUTH_API = "http://localhost:3030/api/auth";
const AUTH_API = "https://limitless-reef-91192.herokuapp.com/api/auth";
//const AUTH_API = `api/auth`;

//signup

const signupUser = creds => {
  return HttpClient.post(`${AUTH_API}/signup`, creds);
};

//signin

const signinUser = creds => {
  return HttpClient.post(`${AUTH_API}/signin`, creds);
};
const AuthApi = { signupUser, signinUser };

export { AuthApi };
