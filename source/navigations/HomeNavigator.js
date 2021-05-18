import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import {
    COMPETITORS, 
    HOME, PROFILE, 
    ALBUM, ALBUM_IMAGES,
    GAME_TOURNAMENTS, GAME_PROFILE} from '../constants/routeNames';
// import Profile from '../screens/Profile';
// import Competitors from '../screens/Competitors';
// import Album from '../screens/Album';
// import AlbumImages from '../screens/AlbumImages';
// import GameTournaments from '../screens/GameTournaments';
// import GameProfile from '../screens/GameProfiles';
// import { Text, View } from 'react-native';
// import Test from '../screens/Test';
// import { NavigationContainer } from '@react-navigation/native';

const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator screenOptions={{headerShown: false}} initialRouteName = {HOME}>
            <HomeStack.Screen name = {HOME} component={Home}/>
            {/* <HomeStack.Screen name = {PROFILE} component = {Profile} />
            <HomeStack.Screen name = {COMPETITORS} component = {Competitors} />
            <HomeStack.Screen name = {ALBUM} component = {Album} />
            <HomeStack.Screen name = {ALBUM_IMAGES} component = {AlbumImages} />
            <HomeStack.Screen name = {GAME_TOURNAMENTS} component = {GameTournaments} />
            <HomeStack.Screen name = {GAME_PROFILE} component = {GameProfile} /> */}
        </HomeStack.Navigator>
    );
};

export default HomeNavigator;