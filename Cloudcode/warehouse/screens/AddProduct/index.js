import * as React from 'react';
import { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet, FlatList, TextInput, Pressable, } from 'react-native';;
import ModalDropdown from 'react-native-modal-dropdown';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Header from "../../components/header"
import Button from "../../components/button"

export default function AddProductScreen({ navigation }) {
  const field = { productType: "", pickList: "", quantity: 0 }
  const [inputList, setInputList] = useState([{ id: 'item-1', ...field }]);

  const addItem = () => {
    setInputList(existingItems => [...existingItems, { id: `item-${existingItems.length + 1}`, ...field }])
  }

  const deleteItem = (idToRemove) => {
    const data = inputList.filter((item) => item.id !== idToRemove)
    setInputList(data)
  }

  const updateItem = (index, key, value) => {
    inputList[index][key] = value
    setInputList(inputList)
  }

  const getItem = (id) => {
    return inputList.find(item => item.id === id)
  }

  console.log(inputList)

  const renderDropdown = (index, options, field) =>
    <ModalDropdown
      options={options}
      onSelect={(idx, value) => {
        updateItem(index, field, value)
        console.debug(`index=${index}, idx=${idx}, value='${value}'`);
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
        width: '48%',
        borderWidth: 0,
        borderBottomWidth: 1
      }}
    />

  const Item = ({ id, index }) => (
    <View style={styles.item}>
      {/* <Text style={styles.title}>{id}</Text> */}
      <View style={styles.dropdownContainer}>
        {renderDropdown(index, ['Apple', 'Samsung'], "productType")}

        {renderDropdown(index, ['IPhone 5', 'IPhone 6'], "pickList")}
      </View>
      <TextInput
        style={styles.quantityInput}
        defaultValue={String(getItem(id).quantity)}
        onChangeText={(text) => updateItem(index, "quantity", text)}
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
      <View style={styles.listContainer}>
        <FlatList
          data={inputList}
          renderItem={({ item, index }) => (<Item {...item} index={index} />)}
          keyExtractor={item => item.id}
          ListHeaderComponent={<Header title1="Product Type" title2="PickList" title3="Quantity" addedClasses={styles.headerTextWidth} />}
        />
        {/* {inputList.map(item => {
          return <Item id={item.id} key={item.id} />
        })}*/}

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
  listContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
    width: '100%'
  },
  item: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '90%'
  },
  title: {
    fontSize: hp('2%'),
  },
  dropdownContainer: {
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  quantityInput: {
    width: '16%',
    padding: 8,
    borderWidth: 1,
    marginLeft: 50,
    fontSize: hp('2%'),
  },
  btn: {
    backgroundColor: '#f44133',
    padding: 2,
    borderRadius: 4,
    width: '18%',
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