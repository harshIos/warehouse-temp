/**
 * Sample React Native Scanner
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React from 'react';
 import type {Node} from 'react';

 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 import { RNCamera } from 'react-native-camera';
 
 const Scanner: () => Node = () => {
 
   const onBarCodeRead =(e) => {
     console.log('data', e.data)
   }
 
   return (
     <SafeAreaView  style={styles.container} >
       <RNCamera captureAudio={false} style={styles.scanner} onBarCodeRead={onBarCodeRead} />
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
   }
 });
 
 export default Scanner;
 