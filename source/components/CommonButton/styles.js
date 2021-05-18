import {StyleSheet} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default StyleSheet.create({
    wrapper : {
        height : responsiveHeight(6),
        width : responsiveWidth(90),
        borderRadius : responsiveWidth(3),
    },
    commonButtonTextStyle : {
        color : 'white',
        fontWeight : 'bold',
        textAlign : 'center',
        textAlignVertical : 'center',
        height: responsiveHeight(6),
        ...Platform.select({
            ios : {
                lineHeight : responsiveHeight(6),
            }
        }),
        fontSize : responsiveFontSize(2.5)
    },
});