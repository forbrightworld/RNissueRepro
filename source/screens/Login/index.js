import {useRoute} from '@react-navigation/native'
import React, {useState, useEffect, useContext} from 'react';
import { Alert } from 'react-native';
import LoginComponent from '../../components/Login';
// import loginUser from '../../context/actions/auth/loginUser';
// import googleSignInUser from '../../context/actions/auth/googleSignInUser';
import { GlobalContext } from '../../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    LOGIN_FAIL,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
} from '../../constants/actionTypes';

const Login = () => {
    const [form, setForm] = useState({});
    const [justSignedUp, setJustSignedUp] = useState(false);
    const {params} = useRoute();
    React.useEffect(() => {
        if(params?.data) {
            setJustSignedUp(true);
            setForm({...form, userName : params.data.username})
        }
    }, [params]);

    const {
        authDispatch,
        authState: {error, loading},
    } = useContext(GlobalContext);

    const onSubmit = () => {
        if (form.userName && form.password) {
//             loginUser(form)(authDispatch);
            AsyncStorage.setItem('token', '123456');
            AsyncStorage.setItem('user', JSON.stringify({user : 'test'}));
            authDispatch({
                type: LOGIN_SUCCESS,
                payload: {user : 'test'},
            });
        }
    };

    // const googleSignIn = () => {
    //     console.log("google signin at index.js Login screen");
    //     googleSignInUser()(authDispatch);
    // }

    const onChange = ({name, value}) => {
        setJustSignedUp(false);
        setForm({...form, [name]: value});
    };

    return (
        <LoginComponent
            onSubmit={onSubmit}
            // googleSignIn = {googleSignIn}
            onChange={onChange}
            form={form}
            error={error}
            loading={loading}
            justSignedUp={justSignedUp}
        />
    );
};

export default Login;
