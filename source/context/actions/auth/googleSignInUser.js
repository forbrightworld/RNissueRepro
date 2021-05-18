import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    LOGIN_FAIL,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
} from '../../../constants/actionTypes';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly', 'https://www.googleapis.com/auth/contacts.other.readonly'],
    webClientId: '307442699668-ok6hbo0s1k0k22cmtrap28sh934u86p6.apps.googleusercontent.com',
    offlineAccess: true,
    hostedDomain: '',
    loginHint: '',
    forceCodeForRefreshToken: true,
    accountName: ''
});

const signIn = async (dispatch) => {
    try {
        await GoogleSignin.hasPlayServices();
        const user = await GoogleSignin.signIn();
        console.log('user info for google signin', user);
        AsyncStorage.setItem('token', user.idToken);
        AsyncStorage.setItem('user', JSON.stringify(user));
        dispatch({
            type: LOGIN_SUCCESS,
            payload: user,
        });
    } catch (error) {
        dispatch({
            type : LOGIN_FAIL,
            payload : error.message
        });
        if(error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log('cancelled');
        } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log('in progress');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log('play services not available');
        } else {
            console.log(error);
        }
    }
};

export default () => (dispatch) => {
    dispatch({
        type : LOGIN_LOADING,
    });

    signIn(dispatch);
}