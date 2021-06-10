import * as React from 'react';
import { useState, useRef, createRef } from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet, FlatList, TextInput, Pressable, } from 'react-native';;
import ModalDropdown from 'react-native-modal-dropdown';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Header from "../../components/header"
import Button from "../../components/button"

export default function AddProductScreen({ navigation }) {
  const dropdown = useRef(null);
  const [productType, setProductType] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Samsung', value: 'samsung' }
  ]);

  const [pickList, setPickList] = useState([
    { label: 'iPhone 5', value: 'i5' },
    { label: 'iPhone 5s', value: 'i5s' },
    { label: 'iPhone 6', value: 'i6' },
    { label: 'iPhone 6s', value: 'i6s' },
    { label: 'iPhone 7', value: 'i7' },
    { label: 'iPhone 8', value: 'i8' },
    { label: 'iPhone x', value: 'x' },
  ]);
  const field = {productType: "", pickList: "", quantity: 0}
  const [inputList, setInputList] = useState([{ id: 'item-1', ...field }]);

  const addItem = () => {
    setInputList(existingItems => [...existingItems, { id: `item-${existingItems.length+1}`, ...field}])
  }

  const deleteItem = (idToRemove) => {
    const data = inputList.filter((item) => item.id !== idToRemove)
    setInputList(data)
  }

  const updateItem = (idToUpdate, key, value) => {
    const data = inputList.map(rowItem => ((rowItem.id === idToUpdate) ? {...rowItem, [key]: value} : rowItem))
    console.log( idToUpdate, key, value)
    setInputList(data)
  }

  const getItem = (id) => {
    return inputList.find(item => item.id === id)
  }
  const Item = ({ id }) => (
    <View style={styles.item}>
       {/* <Text style={styles.title}>{id}</Text> */} 
      <View style={styles.dropdownContainer}>
        <ModalDropdown
          ref={dropdown}
          options={productType}
          renderButtonText={(rowData) => `${rowData.label}`}
          renderRow={(rowData, rowID, highlighted) => {
            return (<Pressable
              style={{ padding: 10 }}
              onPress={() => {
                updateItem(id, "productType", rowData.label)
                dropdown.current.select(rowID)
                dropdown.current.hide(); 
              }}
            >
              <Text style={styles.dropdownItem}>
                {rowData.label}
              </Text>
            </Pressable>)
          }}
          textStyle={{
            fontSize: hp('2%'),
            padding: 10
          }}
          dropdownStyle={{
            width: '25%',
            borderColor: '#aaaaaa',
            borderWidth: 1,
            borderRadius: 5,
          }}
          dropdownTextStyle={{
            fontSize: hp('2%'),
            width: '100%',
            borderWidth: 0,
            borderBottomWidth: 1,
          }}
          style={{
            width: '60%',
            borderWidth: 0,
            borderBottomWidth: 1
          }}
        />
      </View>
      <TextInput
        editable
        style={styles.quantityInput}
        defaultValue={String(getItem(id).quantity)}
        onChangeText={(text) => updateItem(id, "quantity", text)}
        /* value={String(getItem(id).quantity)} */
      />

      <View style={styles.btnContainer}>
        <Pressable
          onPress={addItem}
          style={[styles.btn, styles.btnColor]}>
          <Text style={styles.text}>+</Text>
        </Pressable>
        <Pressable
          onPress={() => deleteItem(id)}
          style={styles.btn}>
          <Text style={styles.text}>x</Text>
        </Pressable>
      </View>
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
          ListHeaderComponent={<Header title1="Product Type" title2="PickList" title3="Quantity" addedClasses={styles.headerTextWidth} />}
        />
        {/* {inputList.map(item => {
          return <Item id={item.id} key={item.id} />
        })}*/}
        {
          /* inputList.map(item => console.log(item)) */
        }
      </View>
      <View style={styles.bottomBtnContainer}>
        <Button onPress={() => navigation.goBack()} title="CANCEL" width={"48%"} productType="light" />
        <Button onPress={() => navigation.navigate('ProductList')} title="SAVE" width={"48%"} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
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
  dropdownContainer: {
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  quantityInput: {
    width: '20%',
    padding: 8,
    borderWidth: 1,
    marginLeft: 150,
    fontSize: hp('2%'),
  },
  btn: {
    backgroundColor: '#f44133',
    padding: 2,
    borderRadius: 4,
    width: '16%',
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  btnColor: {
    backgroundColor: '#29c8b7',
  },
  text: {
    color: '#fff',
    fontSize: hp('3%'),
    fontWeight: 'bold'
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '4%'
  },
  bottomBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '2%'
  },
  headerTextWidth: {
    marginLeft: '-20%'
  },
  dropdownItem: {
    padding: 2,
    fontSize: hp('2%'),
  }
})