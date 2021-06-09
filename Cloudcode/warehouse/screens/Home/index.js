/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { Pressable, SafeAreaView, View, Image, StatusBar, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#2099e7' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#2099e7" />
            <View style={styles.scanner} >
                <TouchableOpacity onPress={() => navigation.navigate('Scanner')}>
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
            <View style={styles.info}>
                <View style={styles.infoContainer} >
                    <Text style={styles.label}>
                        <Text style={styles.label}>Customer Information</Text>
                        <Text style={styles.labelStart}>*</Text>
                    </Text>
                    <Text style={styles.value}>Reference Number</Text>
                </View>
                <View style={styles.infoContainer} >
                    <Text style={styles.label}>
                        <Text style={styles.label}>Contact Information</Text>
                        <Text style={styles.labelStart}>*</Text>
                    </Text>
                    <Text style={styles.value}>Reference Number</Text>
                </View>
                <View style={styles.infoContainer} >
                    <Text style={styles.label}>
                        <Text style={styles.label}>Account Name</Text>
                        <Text style={styles.labelStart}>*</Text>
                    </Text>
                    <Text style={styles.value}>Reference Number</Text>
                </View>
                <View style={[styles.infoContainer, styles.addressInfoContainer]} >
                    <Text style={styles.label}>
                        <Text style={styles.label}>Address</Text>
                        <Text style={styles.labelStart}>*</Text>
                    </Text>
                    <Text style={styles.value}>Reference Number</Text>
                </View>
                <Pressable
                    onPress={() => navigation.navigate('AddProduct')}
                    style={
                        styles.btn
                    }>
                    <Text style={styles.text}>
                        NEXT
                    </Text>
                </Pressable>
            </View>
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
        paddingTop: '5%',
        paddingBottom: '5%'
    },
    scannerImage: {
        height: hp('10%'),
        width: wp('14%')
    },
    info: {
        flex: 3,
        backgroundColor: '#fafdff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2%'
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
        padding: 20,
        borderRadius: 20,
        borderColor: '#fff',
        width: '45%',
        margin: 6
    },
    baseText: {
        color: '#fff',
        fontSize: hp('2%'),
        marginBottom: '1%'
    },
    input: {
        marginTop: 6,
        color: '#fff',
        fontSize: hp('2%'),
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        width: '50%',
        fontWeight: 'bold'
    },
    infoContainer: {
        borderWidth: 1,
        borderColor: '#ededed',
        borderRadius: 50,
        width: '100%',
        height: '16%',
        backgroundColor: '#fff',
        marginTop: '2%'
    },
    label: {
        color: '#797d82',
        paddingHorizontal: '4%',
        paddingTop: '3%',
        fontSize: hp('1.8%')
    },
    value: {
        color: '#51575c',
        paddingHorizontal: '4%',
        fontSize: hp('2%'),
        paddingTop: '2%',
        fontWeight: 'bold'
    },
    labelStart: {
        color: '#ff0000',
    },
    addressInfoContainer: {
        height: '24%',
    },
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

export default Home;
