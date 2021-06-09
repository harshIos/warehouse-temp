/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { SafeAreaView, View, Image, StatusBar, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Home = ({navigation}) => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#2099e7' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#2099e7" />
            <View style={styles.scanner} >
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Scanner')}>
                    <Image source={require('../../assets/qrscanner.png')} style={styles.scannerImage} />
                </TouchableOpacity>
                <View style={styles.textContainer} >
                    <View style={styles.textView} >
                        <Text style={styles.baseText}>Tracking Number</Text>
                        <TextInput
                            editable
                            maxLength={40}
                            value={'1234567890'}
                            keyboardType="numeric"
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.textView} >
                        <Text style={styles.baseText}>Reference Number</Text>
                        <TextInput
                            editable
                            maxLength={40}
                            value={'1234567890'}
                            keyboardType="numeric"
                            style={styles.input}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.info} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    scanner: {
        flex: 1,
        backgroundColor: '#2099e7',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '5%'
    },
    scannerImage: {
        height: hp('10%'),
        width: wp('14%')
    },
    info: {
        flex: 3,
        backgroundColor: 'white'
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '6%'
    },
    textView: {
        backgroundColor: '#2099e7',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: '#fff',
        width: '40%',
        margin: 6
    },
    baseText: {
        color: '#fff',
        fontSize: hp('2%')
    },
    input: {
        marginTop: 6,
        color: '#fff',
        fontSize: hp('2%'),
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        width: '44%'
    }, 
    btn: {

    }
});

export default Home;
