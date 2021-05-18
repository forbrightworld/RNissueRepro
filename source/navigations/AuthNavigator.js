import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, REGISTER, WELCOME, FORGOT_PASSWORD, CONFIRM, RESET_PASSWORD_PAGE} from '../constants/routeNames';
import Login from '../screens/Login';
import Register from '../screens/Register';
// import Welcome from '../screens/Welcome';
// import ForgotPassword from '../screens/ForgotPassword';
// import Confirm from '../screens/Confirm';
// import ResetPassword from '../screens/ResetPassword';

const AuthNavigator = () => {
    const AuthStack = createStackNavigator();

    return (
        <AuthStack.Navigator screenOptions={{headerShown: false}} initialRouteName="Welcome">
            {/* <AuthStack.Screen name={WELCOME} component = {Welcome} /> */}
            <AuthStack.Screen name={LOGIN} component = {Login} />
            <AuthStack.Screen name={REGISTER} component = {Register} />
            {/* <AuthStack.Screen name={FORGOT_PASSWORD} component = {ForgotPassword} />
            <AuthStack.Screen name={CONFIRM} component = {Confirm} />
            <AuthStack.Screen name={RESET_PASSWORD_PAGE} component = {ResetPassword} /> */}
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;