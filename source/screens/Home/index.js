import React from 'react';
import {Alert, Text, TouchableOpacity, View, Image} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useContext } from 'react/cjs/react.development';
import logoutUser from '../../context/actions/auth/logoutUser';
import { GlobalContext } from '../../context/Provider';
import styles from './styles';

const Home = () => {
    const {authDispatch} = useContext(GlobalContext);
    const Logout = () => {
        Alert.alert('Logout!', 'Do you want to logout?', [
            {
                text : 'Cancel',
                onPress : () => {},
            },
            {
                text : 'OK',
                onPress : () => {
                    logoutUser()(authDispatch);
                },
            }
        ]);
    };
    return (
        <View style={styles.container}>
            <Text style={{color: 'black', fontSize: responsiveFontSize(2.5)}}>HomeScreen</Text>
            <TouchableOpacity
                onPress={() => Logout()}
            >
                <Text style={{
                    color: 'black', 
                    fontSize: responsiveFontSize(2.5),
                    borderColor : 'green',
                    borderWidth : 1,
                    padding : responsiveWidth(2),
                    marginTop : responsiveHeight(2),
                    }}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;