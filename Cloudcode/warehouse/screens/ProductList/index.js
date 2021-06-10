import * as React from 'react';
import { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet, FlatList, } from 'react-native';;
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Header from "../../components/header"
import Button from "../../components/button"

export default function ProductListScreen({ navigation }) {
  const [inputList, setInputList] = useState([{ id: 'item-0', type: "", item: "", quantity: 0 }]);
  const Item = ({ id }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{id}</Text> 
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2099e7" />
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', padding: 20, width: '100%' }}>
        <FlatList
          data={inputList}
          renderItem={({ item }) => <Item id={item.id} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={<Header title1="Product Type" title2="PickList" title3="Quantity" />}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button onPress={() => navigation.goBack()} title="CANCEL" width={"100%"} type="light" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  item: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%'
  },
  title: {
    fontSize: hp('2%'),
  },
  btnContainer : {
    width: '100%',
    padding: '2%',
  }
})