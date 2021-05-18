import {
    CLEAR_AUTH_STATE,
    CONFIRM_CODE_FAIL,
    CONFIRM_CODE_LOADING,
    CONFIRM_CODE_SUCCESS,
    LOGIN_FAIL,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGOUT_USER,
    REGISTER_FAIL,
    REGISTER_LOADING,
    REGISTER_SUCCESS,
    } from '../../constants/actionTypes';
    
    const auth = (state, {type, payload}) => {
    switch (type) {
    case LOGIN_LOADING:
    case REGISTER_LOADING:
    case CONFIRM_CODE_LOADING:
    return {
    ...state,
    loading: true,
    };
    
    case REGISTER_SUCCESS:
    return {
    ...state,
    loading: false,
    data: payload,
    };
    
    case LOGIN_SUCCESS:
    case CONFIRM_CODE_SUCCESS:
    return {
    ...state,
    loading: false,
    data: payload,
    isLoggedIn: true,
    };
    
    case LOGOUT_USER:
    return {
    ...state,
    loading: false,
    data: null,
    isLoggedIn: false,
    };
    
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case CONFIRM_CODE_FAIL:
    return {
    ...state,
    loading: false,
    error: payload,
    };
    
    case CLEAR_AUTH_STATE:
    return {
    ...state,
    loading: false,
    data: null,
    error: null,
    };
    
    default:
    return state;
    }
    };
    
    export default auth;