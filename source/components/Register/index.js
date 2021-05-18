import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ImageBackground, TextInput, Image, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { CONFIRM, FORGOT_PASSWORD, LOGIN } from '../../constants/routeNames';
import CommonButton from '../../components/CommonButton';
import styles from './styles';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
// import { LoginManager } from 'react-native-fbsdk-next';

const Register = ({
    googleSignIn,
    error,
    form,
    errors,
    onChange,
    loading,
    onSubmit,
}) => {
    const {navigate} = useNavigation();
    const [isKeyboard, setKeyboard] = useState(false);

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);
    
    const _keyboardDidShow = () => {
        setKeyboard(true);
    };

    const _keyboardDidHide = () => {
        setKeyboard(false);
    };

    // const fbSignin = () => {
    //     console.log("okay");
    //     LoginManager.logInWithPermissions(["public_profile"]).then(
    //         function(result) {
    //           if (result.isCancelled) {
    //             console.log("Login cancelled");
    //           } else {
    //             console.log(
    //               "Login success with permissions: " +
    //                 result.grantedPermissions.toString()
    //             );
    //           }
    //         },
    //         function(error) {
    //           console.log("Login fail with error: " + error);
    //         }
    //     );
    // };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground source={require('../../Assets/images/auth_background.png')} style={styles.backgroundContainer}>
                    {!isKeyboard &&
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Game Room</Text>
                    </View>}
                    {isKeyboard && <View style={{marginTop: responsiveHeight(6),}}></View>}
                    <View style={styles.textInputContainer}>
                        <View style={styles.textInputWrapper}>
                            <TextInput
                                label={"Username"}
                                placeholder="Username"
                                placeholderTextColor = 'grey'
                                style={styles.textInputStyle}
                                value = {form.username}
                                onChangeText = {(value) => {
                                    onChange({name : 'username', value});
                                }}
                            />
                            {/* <Image 
                                source={require('../../Assets/images/password.png')} 
                                style={styles.loginPasswordIcon}/> */}
                        </View>
                        <View style={{flexDirection : 'row', marginBottom : responsiveHeight(2)}}>
                            <View style={{
                                flexDirection : 'row', 
                                width : responsiveWidth(43), 
                                borderColor : 'black', borderBottomWidth : 1,
                                marginRight : responsiveWidth(3)}}>
                                <TextInput
                                    label={"first_name"}
                                    placeholder="First Name"
                                    placeholderTextColor = 'grey'
                                    style={[styles.textInputStyle, {width: responsiveWidth(35)}]}
                                    value = {form.first_name}
                                    onChangeText = {(value) => {
                                        onChange({name : 'first_name', value});
                                    }}
                                />
                                {/* <Image 
                                    source={require('../../Assets/images/password.png')} 
                                    style={styles.loginPasswordIcon}/> */}
                            </View>
                            <View style={{
                                flexDirection : 'row', 
                                width : responsiveWidth(45),
                                borderColor : 'black', borderBottomWidth : 1,
                                alignItems : 'flex-end'}}>
                                <TextInput
                                    label={"last_name"}
                                    placeholder="Last Name"
                                    placeholderTextColor = 'grey'
                                    style={[styles.textInputStyle, {width: responsiveWidth(35)}]}
                                    value = {form.last_name}
                                    onChangeText = {(value) => {
                                        onChange({name : 'last_name', value});
                                    }}
                                /> 
                            {/* <Image 
                                source={require('../../Assets/images/password.png')} 
                                style={styles.loginPasswordIcon}/> */}
                            </View>
                        </View>
                        <View style={styles.textInputWrapper}>
                            <TextInput
                                label={"Email"}
                                keyboardType = "email-address"
                                placeholder="Email"
                                placeholderTextColor = 'grey'
                                style={styles.textInputStyle}
                                value = {form.email}
                                onChangeText = {(value) => {
                                    onChange({name : 'email', value});
                                }}
                            />
                            {/* <Image 
                                source={require('../../Assets/images/mobile_email.png')}
                                style={styles.loginIcon}
                            /> */}
                        </View>
                        <View style={styles.textInputWrapper}>
                            <TextInput
                                label={"Password"}
                                secureTextEntry
                                placeholder="Password"
                                placeholderTextColor = 'grey'
                                style={styles.textInputStyle}
                                value = {form.password}
                                onChangeText = {(value) => {
                                    onChange({name : 'password', value});
                                }}
                            />
                            {/* <Image 
                                source={require('../../Assets/images/password.png')} 
                                style={styles.loginPasswordIcon}/> */}
                        </View>
                        <View style={styles.textInputWrapper}>
                            <TextInput
                                label={"Confirm_Password"}
                                secureTextEntry
                                placeholder="Confirm Password"
                                placeholderTextColor = 'grey'
                                style={styles.textInputStyle}
                                value = {form.confirm_password}
                                onChangeText = {(value) => {
                                    onChange({name : 'confirm_password', value});
                                }}
                            />
                            {/* <Image 
                                source={require('../../Assets/images/password.png')} 
                                style={styles.loginPasswordIcon}/> */}
                        </View>
                        {!isKeyboard &&
                        <TouchableOpacity
                            onPress = {() => {navigate(FORGOT_PASSWORD)}}
                            style={styles.alignRightContainer}
                        >
                            <Text style={[styles.alignRightText, styles.boldText]}>Forgot Password?
                            </Text>
                        </TouchableOpacity>}
                    </View>
                    <View style={styles.bottomContainer}>
                        {!isKeyboard &&
                        <View style={styles.socialIconContainer}>
                            <TouchableOpacity
                                onPress={googleSignIn}
                            >
                                <Image
                                    source={require('../../Assets/images/google_logo.png')}
                                    style={styles.socialIconStyle}
                                />
                            </TouchableOpacity>
                            {/* <TouchableOpacity
                                onPress={fbSignin}
                            >
                                <Image 
                                    source={require('../../Assets/images/fb_logo.png')}
                                    style={styles.socialIconStyle}
                                />
                            </TouchableOpacity> */}
                            <Image 
                                source={require('../../Assets/images/twitter_logo.png')}
                                style={styles.socialIconStyle}
                            />
                        </View>}
                        {isKeyboard && <View style={{marginTop: responsiveHeight(8),}}></View>}
                        <CommonButton
                            disabled = {loading}
                            onPress = {onSubmit}
                            loading={loading}
                            primary
                            title="Register"/>
                        {!isKeyboard &&
                        <TouchableOpacity
                            onPress = {() => {navigate(LOGIN)}}
                            style={styles.alignRightContainer}
                        >
                            <Text style={styles.alignRightText}>Already have an account? <Text> </Text>
                                <Text style={styles.boldText}>Login</Text>
                            </Text>
                        </TouchableOpacity>}
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default Register;