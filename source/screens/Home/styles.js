import {StyleSheet} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    containerLogo : {
        width:responsiveWidth(40), 
        height: responsiveHeight(20), 
        resizeMode: 'contain',
    },
});