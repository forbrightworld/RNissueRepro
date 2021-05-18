import {StyleSheet} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '../../Assets/theme/colors';

export default StyleSheet.create({
    container : {
        flex : 1,
    },
    backgroundContainer : {
        flex : 1,
        resizeMode : 'cover',
    },
    titleContainer : {
        flex : 1,
        height : responsiveHeight(10),
        // borderColor : 'black',
        // borderWidth : 1,
        justifyContent : 'flex-end',
        alignItems : 'center',
    },
    titleText : {
        color : colors.primary,
        fontSize : responsiveFontSize(5),
        fontWeight : 'bold',
    },
    textInputContainer : {
        flex : 2,
        alignItems : 'center',
        justifyContent : 'center',
        width : '100%',
        minHeight : responsiveHeight(10),
    },
    textInputWrapper : {
        flexDirection : 'row', 
        width : responsiveWidth(90),
        borderBottomColor : 'black',
        borderBottomWidth : 1,
        marginBottom : responsiveHeight(3),
    },
    textInputStyle : {
        fontSize : responsiveFontSize(2.5),
        width : responsiveWidth(80),
        paddingBottom : responsiveHeight(1),
    },
    loginIcon : {
        height : responsiveHeight(4),
        width : responsiveWidth(5),
        marginBottom : responsiveHeight(1),
    },
    loginPasswordIcon : {
        height : responsiveHeight(3),
        width : responsiveWidth(5),
        marginBottom : responsiveHeight(1),
    },
    alignRightContainer : {
        alignItems : 'flex-end',
        width : responsiveWidth(90),
        marginTop : responsiveHeight(1),        
    },
    alignRightText : {
        color : colors.authScreenText,
        fontSize : responsiveFontSize(2),
    },
    bottomContainer : {
        flex : 1.5,
        alignItems : 'center',
    },
    boldText : {
        fontWeight : 'bold',
    },
    socialIconContainer : {
        flexDirection : 'row',
        alignItems : 'flex-start',
        // borderColor : 'red',
        // borderWidth : 1,
        width : responsiveWidth(90),
        marginBottom : responsiveHeight(5),
    },
});