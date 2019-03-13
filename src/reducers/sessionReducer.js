import * as types from '../actions/actionTypes'
import intialState from './intialState'
import { checkCookie } from "../helpers/cookie";

export default function(state = intialState.session, action) {
    switch(action.type){
        case types.LOG_IN_REQUEST:
             return {
                 loggingIn: true
             }
        case types.LOG_IN_SUCCESS:                 
            return !!checkCookie('jwt')
        case types.LOG_OUT:
            return !!checkCookie('jwt')            
        case types.LOG_IN_FAILER:
            return {
                error: action.payload
            }
        default:
            return state    
    }
}