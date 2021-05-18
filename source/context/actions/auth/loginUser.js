import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import {
    LOGIN_FAIL,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helper/axiosInstance';

export default ({password, userName: email}) => (dispatch) => {
    dispatch({
        type : LOGIN_LOADING,
    });
    axiosInstance
        .post('login', {            
            email,
            password,
        })
        .then((res) => {
            if(res.data.status == 0) {
                Alert.alert("You entered wrong email or password");
                dispatch({
                    type : LOGIN_FAIL,
                    payload : 'wrong password',
                });
            } else {
                AsyncStorage.setItem('token', res.data.data.token);
                AsyncStorage.setItem('user', JSON.stringify(res.data.data));
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data,
                });
            }
        })
        .catch((error) => {
            console.log(error);
            dispatch({
                type : LOGIN_FAIL,
                payload: error.response
                    ? error.response.data
                    : {error : 'Something went wrong, try again'},
            });
        });
};