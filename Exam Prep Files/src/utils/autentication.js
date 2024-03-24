import {get,post,put,del} from '../dataService/requester.js';
import { clearUserData } from '../dataService/userData.js';

let baseUrl = 'http://localhost:3030/';

 async function login({email,password}){
    let url = "users/login";
    let data = {email,password};
    return await post(baseUrl + url,data);
}

async function register({email,password}){
    let url = "users/register";
    let data = {email,password};
    return await post(baseUrl + url,data);
}

async function logout(){
    let url = "users/logout";
    let promise = get(baseUrl + url);
    clearUserData();
    await promise;
    
}

export {
    login,
    register,
    logout
}