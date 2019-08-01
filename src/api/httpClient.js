import axios from 'axios' 


//Create a Http Client using Axios - can change to native fetch api if desired

const post = (url, data, config = {}) => {
    return axios.post(url, data, config)
}

const get = (url) => {
    return axios(url)
}

const put = (url, data, config = {}) => {
    return axios.put(url, data, config)
}

//Cannot contain a delete method - because delete is a keyword.

const del = (url, config = {}) => {
    return axios.delete(url, config)
}

//Encapsulating in a JSON object

const HttpClient = {
    post,
    get,
    put,
    delete: del
}

export {HttpClient}