import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import {
    RESET_PASSWORD_LOADING,
    RESET_PASSWORD_FAIL,
    RESET_PASSWORD_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helper/axiosInstance';
import axios from 'axios';

export default ({password, userid}) => (dispatch) => (onSuccess) => {
    console.log("resetPassword.js password && userid", password, userid);
    dispatch({
        type : RESET_PASSWORD_LOADING,
    });
    axiosInstance
        .post('reset_password', {
            password : password,
            userid : userid
        })
        .then((res) => {
            if(res.data.status == 0) {
                Alert.alert("Something went wrong");
                dispatch({
                    type: RESET_PASSWORD_FAIL,
                    payload: "Wrong Code",
                });
            } else {
                // AsyncStorage.setItem('token', res.data.data.token);
                // AsyncStorage.setItem('user', JSON.stringify(res.data.data));
                dispatch({
                    type: RESET_PASSWORD_SUCCESS,
                    payload: res.data
                });
                console.log("resetPassword.js", res.data);
                onSuccess(res.data);
            }
        })
        .catch((error) => {
            console.log("resetPassword.js", error);
            dispatch({
                type : CONFIRM_CODE_FAIL,
                payload: error.response
                    ? error.response.data
                    : {error : 'Something went wrong, try again'},
            });
        });
};