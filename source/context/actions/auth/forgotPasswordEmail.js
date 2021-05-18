import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import {
    RESET_PASSWORD_EMAIL_LOADING,
    RESET_PASSWORD_EMAIL_FAIL,
    RESET_PASSWORD_EMAIL_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helper/axiosInstance';
import axios from 'axios';

export default (email) => (dispatch) => (onSuccess) => {
    console.log(email);
    dispatch({
        type : RESET_PASSWORD_EMAIL_LOADING,
    });
    axiosInstance
        .post('verify_email', {
            email: email
        })
        .then((res) => {
            if(res.data.status == 0) {
                Alert.alert("You entered wrong email. Please check email again");
                dispatch({
                    type: RESET_PASSWORD_EMAIL_FAIL,
                    payload: "Wrong email",
                });
            } else {
                dispatch({
                    type: RESET_PASSWORD_EMAIL_SUCCESS,
                    payload: res.data,
                });
                onSuccess(res.data);
            }
        })
        .catch((error) => {
            console.log(error);
            dispatch({
                type : RESET_PASSWORD_EMAIL_FAIL,
                payload: error.response
                    ? error.response.data
                    : {error : 'Something went wrong, try again'},
            });
        });
};