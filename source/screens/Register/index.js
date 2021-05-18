import {useFocusEffect, useNavigation, useRoute} from '@react-navigation/native'
import React, {useState, useEffect, useContext} from 'react';
import { Alert } from 'react-native';
import RegisterComponent from '../../components/Register';
import {CONFIRM} from '../../constants/routeNames';
import { GlobalContext } from '../../context/Provider';
import register, {clearAuthState} from '../../context/actions/auth/register';
// import googleSignInUser from '../../context/actions/auth/googleSignInUser';

const Register = () => {
    const [form, setForm] = useState({});
    const {navigate} = useNavigation();
    const [errors, setErrors] = useState({});
    const [justSignedUp, setJustSignedUp] = useState(false);
    const {
        authDispatch,
        authState : {error, loading, data},
    } = useContext(GlobalContext);

    useFocusEffect(
        React.useCallback(() => {
            return () => {
                if(data || error) {
                    clearAuthState()(authDispatch);
                }
            };
        }, [data, error]),
    );

    const onChange = ({name, value}) => {
        setForm({...form, [name]: value});
        
        if(value !== '') {
            if(name === 'password') {
                if(value.length < 6) {
                    setErrors((prev) => {
                        return {...prev, [name]: 'Password should be 6 letters at minimum'};
                    });
                } else {
                    setErrors((prev) => {
                        return {...prev, [name]: null};
                    });
                }
            } else {
                setErrors((prev) => {
                    return {...prev, [name]: null};
                });
            }
        } else {
            setErrors((prev) => {
                return {...prev, [name]: 'This field is required'};
            });
        }
    };

    const onSubmit = () => {
        if (!form.username) {
            setErrors((prev) => {
                return {...prev, username: 'Please add a username'};
            });
        }
        if (!form.first_name) {
            setErrors((prev) => {
                return {...prev, first_name: 'Please add a first name'};
            });
        }
        if (!form.last_name) {
            setErrors((prev) => {
                return {...prev, last_name: 'Please add a last name'};
            });
        }
        if (!form.email) {
            setErrors((prev) => {
                return {...prev, email: 'Please add a email'};
            });
        }
        if (!form.password) {
            setErrors((prev) => {
                return {...prev, password: 'Please add a password'};
            });
        }

        if(
            Object.values(form).length === 6 &&
            Object.values(form).every((item) => item.trim().length>0) &&
            Object.values(errors).every((item) => !item)
        ) {
            register(form)(authDispatch)((response) => {
                navigate(CONFIRM, {data : response});
            });
        }
    };

    // const googleSignIn = () => {
    //     console.log("google signin at index.js screen");
    //     googleSignInUser()(authDispatch);
    // }

    return (
        <RegisterComponent
            // googleSignIn = {googleSignIn}
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            error={error}
            errors = {errors}
            loading={loading}
        />
    );
};

export default Register;