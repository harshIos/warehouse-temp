import * as React from 'react';
import {useState} from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet, FlatList } from 'react-native';;

export default function AddProductScreen({navigation}) {
  const [inputList, setInputList] = useState([{ id: 'item-0', type: "", item: "", quantity: 0 }]);
  const Item = ({ id }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{id}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2099e7" />
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      <FlatList
        data={inputList}
        renderItem={ ({ item }) => <Item id={item.id} /> }
        keyExtractor={item => item.id}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff'
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})