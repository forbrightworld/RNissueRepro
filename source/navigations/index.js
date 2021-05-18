import React, {useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import SplashScreen from 'react-native-splash-screen';
import HomeNavigator from './HomeNavigator';
import { ActivityIndicator, Text, View } from 'react-native';
import {GlobalContext} from '../context/Provider';

const AppNavContainer = () => {
    const {
        authState : {isLoggedIn},
    } = useContext(GlobalContext);

    const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);
    const [authLoaded, setAuthLoaded] = React.useState(false);

    const getUser = async () => {
        try {            
            const user = await AsyncStorage.getItem('user');
            if (user) {
                setAuthLoaded(true);
                setIsAuthenticated(true);
            } else {
                setAuthLoaded(true);
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.log("navigations index.js", error);            
        }
    };
    useEffect(() => {
        getUser();
    }, [isLoggedIn]);
    // React.useEffect(() => {
    //     SplashScreen.hide();
    // }, []);

    return (
        <>
            {authLoaded ? (
                <NavigationContainer>
                    {isAuthenticated ? <HomeNavigator/> : <AuthNavigator/> }
                </NavigationContainer>
            ) :(
                <ActivityIndicator />
            )}
        </>
    );
};

export default AppNavContainer;