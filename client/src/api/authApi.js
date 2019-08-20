import {HttpClient} from './httpClient' 

// This is the API. The backend root URL can be set from here.

const API = 'http://localhost:3030/api'

//Setting the todos URI

const AUTH_API = `${API}/auth`

//signup

const signupUser = creds => {
    return HttpClient.post(`${AUTH_API}/signup`, creds)
}

//signin

const signinUser = creds => {
    return HttpClient.post(`${AUTH_API}/signin`, creds)
}
const AuthApi = {signupUser, signinUser}

export {AuthApi}