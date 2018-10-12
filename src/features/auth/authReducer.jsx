import { LOGIN_USER, SIGN_OUT_USER } from './authConstants'
import { createReducer } from '../../app/common/util/reducerUtil';

const initalState = {
    currrentUser: {}
}

export const loginUser = (state, payload) => {
    return {
        ...state,
        authenticated: true,
        currrentUser: payload.credentials.email       
    }
}

export const signOutUser = (state, payload) => {
    return {
        ...state,
        authenticated: false,
        currrentUser: {}
    }
}

export default createReducer(initalState, {
    [LOGIN_USER]: loginUser,
    [SIGN_OUT_USER]: signOutUser
})