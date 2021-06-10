import React from 'react';
import { Pressable, Text, StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Button = ({onPress, title}) => {
    return (
        <Pressable
            onPress={onPress}
            style={
                styles.btn
            }>
            <Text style={styles.text}>
                {title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#2099e7',
        padding: 20,
        borderRadius: 20,
        width: '100%',
        marginTop: '10%'
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: hp('2%')
    }
});


export default Button