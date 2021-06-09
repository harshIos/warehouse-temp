/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import type { Node } from 'react';
import { SafeAreaView, View, Image, StatusBar, Text, StyleSheet } from 'react-native';


const Home: () => Node = () => {

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#2099e7' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#2099e7" />
            <View style={styles.scanner} >
                <Image source={require('../../assets/qrscanner.png')} />
                <View style={styles.textContainer} >
                    <View style={styles.textView} >
                        <Text style={styles.baseText}>Tracking Number</Text>
                    </View>
                    <View style={styles.textView} >
                        <Text style={styles.baseText}>Reference Number</Text>
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
    info: {
        flex: 3,
        backgroundColor: 'white'
    },
    textContainer: {
        display : 'flex',
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
        width : '40%',
        margin: 6
    },
    baseText: {
        color: '#fff'
    }
});

export default Home;
