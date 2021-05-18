import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import colors from '../../Assets/theme/colors';
import styles from './styles';

const CommonButton = ({
    title,
    primary,
    secondary,
    danger,
    disabled,
    loading,
    onPress,
    style,
}) => {
    const getBgColor = () => {
        if(disabled) {
            return 'grey';
        }
        if(primary) {
            return colors.primary;
        }
        if(secondary) {
            return 'green';
        }
        if(danger) {
            return 'red';
        }

    };

    return (
        <TouchableOpacity
            disabled = {disabled}
            onPress = {onPress}
            style={[styles.wrapper, {backgroundColor: getBgColor()}, style]}
        >
           <Text style={styles.commonButtonTextStyle}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CommonButton;