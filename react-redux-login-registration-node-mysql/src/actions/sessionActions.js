import * as types from './actionTypes';
import sessionApi from "../api/sessionApi";
import * as cookieHelper from "../helpers/cookie"

export function loginSuccess() {
    return { type: types.LOG_IN_SUCCESS }
}

export function loginFailer(payload) {
    return { type: types.LOG_IN_FAILER, payload }
}

export function loginRequest() {
    return { type: types.LOG_IN_REQUEST }
}

export function loginUser(credentials, callback) {
    return function (dispatch) {
        dispatch(loginRequest())
        return sessionApi.login(credentials).then(response => {            
            if(response.status === 'ok'){                
                cookieHelper.setCookie('jwt', response.token, 1)
                dispatch(loginSuccess())     
                callback();
            }               
            if(response.status === 'error'){
                dispatch(loginFailer(response.message))   
            }
        }).catch(error => {                    
            dispatch(loginFailer('Something went wrong! Please try again after sometime.'))                       
        })
    }
}

export function logoutSuccess(){
    return { type: types.LOG_OUT }
}

export function logOutUser(callback) {
    return function(dispatch) {
        return sessionApi.logout().then(response => {            
            cookieHelper.setCookie('jwt', '', 0)                 
            dispatch(logoutSuccess())
            callback()
        }).catch(error => {
            throw error
        })
    }    
}

