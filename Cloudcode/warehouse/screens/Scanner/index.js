/**
 * Sample React Native Scanner
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  Text,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Scanner = ({ navigation }) => {

  const onBarCodeRead = (e) => {
    console.log('data', e.data)
  }

  return (
    <SafeAreaView style={styles.container} >
      <RNCamera captureAudio={false} style={styles.scanner} onBarCodeRead={onBarCodeRead} />
      <Pressable
        onPress={() => navigation.goBack()}
        style={
          styles.btn
        }>
          <Text style={styles.text}>
          Go Back
          </Text>
      </Pressable>
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
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  btn : {
    backgroundColor: '#2099e7',
    padding: 10,
  },
  text :{ 
    color: '#fff',
    textAlign: 'center',
    fontSize: hp('2%')
  }
});

export default Scanner;
