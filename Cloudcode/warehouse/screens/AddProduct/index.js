import * as React from 'react';
import { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet, FlatList, TextInput, Pressable, } from 'react-native';;
import DropDownPicker from 'react-native-dropdown-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Header from "../../components/header"
import Button from "../../components/button"

export default function AddProductScreen({ navigation }) {
  const [productTypeOpen, setProductTypeOpen] = useState(false);
  const [productType, setProductType] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Samsung', value: 'samsung' }
  ]);
  const [productTypeValue, setProductTypeValue] = useState(null);

  const [pickListOpen, setPickListOpen] = useState(false);
  const [pickList, setPickList] = useState([
    { label: 'iPhone 5', value: 'i5' },
    { label: 'iPhone 5s', value: 'i5s' },
    { label: 'iPhone 6', value: 'i6' },
    { label: 'iPhone 6s', value: 'i6s' },
    { label: 'iPhone 7', value: 'i7' },
    { label: 'iPhone 8', value: 'i8' },
    { label: 'iPhone x', value: 'x' },
  ]);
  const [pickListValue, setPickListValue] = useState(null);

  const [inputList, setInputList] = useState([{ id: 'item-0', productType: "", item: "", quantity: 0 }]);
  const Item = ({ id }) => (
    <View style={styles.item}>
      {/* <Text style={styles.title}>{id}</Text> */}
      <View style={styles.dropdownContainer}>
        <DropDownPicker
          zIndex={2000}
          zIndexInverse={2000}
          open={productTypeOpen}
          value={productTypeValue}
          items={productType}
          setItems={setProductType}
          setOpen={setProductTypeOpen}
          setValue={setProductTypeValue}
          onChangeValue={(value) => {
            console.log(value);
          }}
          style={{
            width: '60%',
            borderWidth: 0,
            borderBottomWidth: 1
          }}
          dropDownContainerStyle={{
            width: '60%',
          }}
          textStyle={{
            fontSize: hp('2%')
          }}
          containerStyle={{
            width: '100%'
          }}
        />
        <DropDownPicker
          zIndex={3000}
          zIndexInverse={1000}
          open={pickListOpen}
          value={pickListValue}
          items={pickList}
          setItems={setPickList}
          setOpen={setPickListOpen}
          setValue={setPickListValue}
          style={{
            marginLeft: -140,
            width: '60%',
            borderWidth: 0,
            borderBottomWidth: 1
          }}
          dropDownContainerStyle={{
            width: '60%',
            marginLeft: -140,
          }}
          textStyle={{
            fontSize: hp('2%')
          }}
        />
      </View>
      <TextInput
        style={styles.quantityInput}
        onChangeText={() => { }}
        value={'10'}
        keyboardType="numeric"
      />

      <View style={styles.btnContainer}>
        <Pressable
          onPress={() => console.log("add")}
          style={[styles.btn, styles.btnColor]}>
          <Text style={styles.text}>+</Text>
        </Pressable>
        <Pressable
          onPress={() => console.log("delete")}
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
      </View>
      <View style={styles.bottomBtnContainer}>
        <Button onPress={() => navigation.goBack()} title="CANCEL" width={"48%"} productType="light" />
        <Button onPress={() => navigation.navigate('ProductList')} title="SAVE" width={"48%"}/>
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
})