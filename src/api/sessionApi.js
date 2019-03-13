import * as apiConstant from './apiConstant'
import { getCookie } from "../helpers/cookie";

class sessionApi {
    static login(credentials) {        
        return fetch(`${apiConstant.API_URL}/login`, {
            method: 'post',
            headers: {
              "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: `email=${credentials.username}&password=${credentials.password}`
          })          
          .then(function (response) {
            return response.json();
          })
          .catch(function (error) {            
            throw error;
          });
    }

    static logout() {
      return fetch(`${apiConstant.API_URL}/logout?token=${getCookie('jwt')}`, {
        method: 'post',        
      })     
      .then(function (response) {
        return response.json();
      })
      .catch(function (error) {
        throw error;
      });      
    }

    static register(credentials) {        
       /* return fetch(`${apiConstant.API_URL}/register`, {
            method: 'post',
            headers: {
              "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: `email=${credentials.username}&password=${credentials.password}`
          })          
          .then(function (response) {
            return response.json();
          })
          .catch(function (error) {            
            throw error;
          });*/
    }

}

export default sessionApi;