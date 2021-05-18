import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import {
    RESEND_CODE_LOADING,
    RESEND_CODE_FAIL,
    RESEND_CODE_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helper/axiosInstance';
import axios from 'axios';

export default (userid) => (dispatch) => {
    userid = 76;
    console.log("resendCode.js userid", userid);
    dispatch({
        type : RESEND_CODE_LOADING,
    });
    axiosInstance
        .post('resend_code', {
            userid : userid
        })
        .then((res) => {
            console.log("resendCode.js ", res.data.status);
            if(res.data.status == 1) {
                Alert.alert("Verification Code has sent again.");
            }
            dispatch({
                type: RESEND_CODE_SUCCESS,
                payload: "success",
            });
        })
        .catch((error) => {
            console.log("resendCode.js enter catch block");
            dispatch({
                type : RESEND_CODE_FAIL,
                payload: error.response
                    ? error.response.data
                    : {error : 'Something went wrong, try again'},
            });
        });
};