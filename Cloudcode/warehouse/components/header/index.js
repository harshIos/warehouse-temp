import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Header = ({ title1, title2, title3 }) => {
    return (
        <View style={styles.itemHeader}>
            <Text style={styles.headerText}>{title1}</Text>
            <Text style={styles.headerText}>{title2}</Text>
            <Text style={[styles.headerText, styles.headerTextWidth]}>{title3}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e8effa',
        /* borderRadius: 10, */
        padding: 20,
        backgroundColor: '#e8effa',
        width: wp('100%')
    },
    headerText: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        marginLeft: '1%',
        marginRight: '10%'
    },
    headerTextWidth: {
        marginLeft: '8%'
    }
});


export default Header