import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import {
    CONFIRM_CODE_LOADING,
    CONFIRM_CODE_FAIL,
    CONFIRM_CODE_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helper/axiosInstance';
import axios from 'axios';

export default ({value, userid, type}) => (dispatch) => (onSuccess) => {
    console.log(value, userid, type);
    dispatch({
        type : CONFIRM_CODE_LOADING,
    });
    axiosInstance
        .post('confirm_code', {
            code : value,
            userid : userid,
            type : type
        })
        .then((res) => {
            if(res.data.status == 0) {
                Alert.alert("You entered wrong code. Please check code again");
                dispatch({
                    type: CONFIRM_CODE_FAIL,
                    payload: "Wrong Code",
                });
            } else {
                if(type =='RESET_PASSWORD') {
                    dispatch({
                        type: CONFIRM_CODE_FAIL,
                        payload: res.data,
                    });
                    onSuccess(res.data);
                }
                if(type == 'REGISTER_NEW_USER') {
                    AsyncStorage.setItem('token', res.data.token);
                    AsyncStorage.setItem('user', JSON.stringify(res.data.user));
                    dispatch({
                        type: CONFIRM_CODE_SUCCESS,
                        payload: res.data,
                    });
                }
            }
        })
        .catch((error) => {
            console.log(error);
            dispatch({
                type : CONFIRM_CODE_FAIL,
                payload: error.response
                    ? error.response.data
                    : {error : 'Something went wrong, try again'},
            });
        });
};