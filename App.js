/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import React from 'react';
 import { Image, Text, StyleSheet, View, ImageBackground } from 'react-native';
 import AppNavContainer from './source/navigations';
 import GlobalProvider, { GlobalContext } from './source/context/Provider';
//  import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
//  import { Menu, MenuProvider } from 'react-native-popup-menu';
 
 export default class App extends React.Component {
   componentDidMount() {
    //  GoogleSignin.configure({
    //    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    //    webClientId: '307442699668-ok6hbo0s1k0k22cmtrap28sh934u86p6.apps.googleusercontent.com',
    //    offlineAccess: true,
    //    hostedDomain: '',
    //    loginHint: '',
    //    forceCodeForRefreshToken: true,
    //    accountName: '',
    //    iosClientId: '307442699668-jccaa666b52pr1715uhngitbeuc766jd.apps.googleusercontent.com'
    //  });
   }
 
   componentWillUnmount() {
     console.log("Unmount");
   }
 
   render() {
     return (
      //  <MenuProvider>
         <GlobalProvider>
           <AppNavContainer />
         </GlobalProvider>
      //  </MenuProvider>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container : {
     flex : 1,    
   },
   backgroundImage : {
     flex : 1,
     resizeMode : 'stretch', 
     justifyContent : 'center',
   }
 });
 
 