import axios from 'axios';

const instance = axios.create({
    baseURL: 'lively-field-07be1a410.2.azurestaticapps.net/api/'
});

instance.defaults.headers.common['Authorization'] = instance.getState().session.token;
// instance.defaults.headers.["Referrer-Policy"] = "strict-origin-when-cross-origin"



// instance.interceptors.request...

export default instance;