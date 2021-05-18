import { Alert } from 'react-native';
import {
    REGISTER_FAIL,
    REGISTER_LOADING,
    REGISTER_SUCCESS,
    CLEAR_AUTH_STATE,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helper/axiosInstance';

export const clearAuthState = () => (dispatch) => {
    dispatch({
        type : CLEAR_AUTH_STATE,
    });
};

export default ({
    email,
    password,
    username : username,
    first_name : first_name,
    last_name : last_name,
}) => (dispatch) => (onSuccess) => {
    dispatch({
        type : REGISTER_LOADING,
    });
    axiosInstance
        .post('register', {
            email,
            password,
            username,
            first_name,
            last_name,
        })
        .then((res) => {
            if (res.data.status == 0) {
                Alert.alert("incorrect credentials", res.data.message);
                dispatch({
                    type : REGISTER_FAIL,
                });
            } else {
                dispatch({
                    type : REGISTER_SUCCESS,
                    payload : res.data,
                });
                onSuccess(res.data);
            }
        })
        .catch((err) => {
            dispatch({
                type : REGISTER_FAIL,
                payload : err.response
                    ? err.response.data
                    : {error : 'Something went wrong, try again'},
            });
        });
};