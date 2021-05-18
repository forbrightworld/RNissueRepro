import { useNavigation } from '@react-navigation/core';
import React, {useState} from 'react';
import { Text, TouchableOpacity, View, ImageBackground, TextInput, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';
import { REGISTER, FORGOT_PASSWORD } from '../../constants/routeNames';
import CommonButton from '../../components/CommonButton';
import { useEffect } from 'react';
// import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk-next';

const LoginComponent = ({
    error,
    form,
    justSignedUp,
    onChange,
    loading,
    onSubmit,
    // googleSignIn,
}) => {
    const {navigate} = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);
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
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>Game Room</Text>
                        </View>
                        <View style={styles.textInputContainer}>
                            <View style={styles.textInputWrapper}>
                                <TextInput
                                    label={"Email"}
                                    keyboardType = "email-address"
                                    placeholder="email"
                                    placeholderTextColor = 'grey'
                                    style={styles.textInputStyle}
                                    value = {form.userName}
                                    onChangeText = {(value) => {
                                        onChange({name : 'userName', value});
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
                            {!isKeyboard && 
                                <TouchableOpacity
                                    onPress = {() => {navigate(FORGOT_PASSWORD)}}
                                    style={styles.alignRightContainer}
                                >
                                    <Text style={[styles.alignRightText, styles.boldText]}>Forgot Password?
                                    </Text>
                                </TouchableOpacity>
                            }
                        </View>
                        <View style={styles.bottomContainer}>
                            {!isKeyboard &&
                            <View style={styles.socialIconContainer}>
                                {/* <TouchableOpacity
                                    onPress={googleSignIn}
                                >
                                    <Image
                                        source={require('../../Assets/images/google_logo.png')}
                                        style={{}}
                                    />
                                </TouchableOpacity> */}
                                {/* <TouchableOpacity
                                    onPress={fbSignin}
                                >
                                    <Image 
                                        source={require('../../Assets/images/fb_logo.png')}
                                        style={{}}
                                    />
                                </TouchableOpacity> */}
                                <Image 
                                    source={require('../../Assets/images/twitter_logo.png')}
                                    style={{}}
                                />
                            </View>}
                            <CommonButton
                                disabled = {loading}
                                onPress = {onSubmit}
                                loading={loading}
                                primary
                                title="Signin"/>
                            <TouchableOpacity
                                onPress = {() => {navigate(REGISTER)}}
                                style={styles.alignRightContainer}
                            >
                                <Text style={styles.alignRightText}>Don't have an account? <Text> </Text>
                                    <Text style={styles.boldText}>Signup</Text>
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </TouchableWithoutFeedback>
            </View>
    );
};

export default LoginComponent;