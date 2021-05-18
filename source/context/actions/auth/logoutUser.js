import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGOUT_USER} from '../../../constants/actionTypes';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';

// const signOut = async () => {
//     try {
//         await GoogleSignin.revokeAccess();
//         await GoogleSignin.signOut();
//     } catch (error) {
//         console.log(error);
//     }
// };

// const getCurrentUser = async () => {
//     const currentUser = await GoogleSignin.getCurrentUser();
//     return currentUser;
// };

export default () => (dispatch) => {
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('user');
    
    // if(getCurrentUser) {
    //     signOut();
    // }    

    dispatch({
        type : LOGOUT_USER,
    });
};