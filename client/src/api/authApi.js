import { HttpClient } from "./httpClient";

// This is the API. The backend root URL can be set from here.

const AUTH_API = "https://limitless-reef-91192.herokuapp.com/api/auth";

const signupUser = creds => {
  return HttpClient.post(`${AUTH_API}/signup`, creds);
};

const signinUser = creds => {
  return HttpClient.post(`${AUTH_API}/signin`, creds);
};
const AuthApi = { signupUser, signinUser };

export { AuthApi };
