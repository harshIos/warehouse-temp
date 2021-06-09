import * as React from 'react';
import { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet, FlatList, TextInput, Pressable, } from 'react-native';;
import DropDownPicker from 'react-native-dropdown-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function AddProductScreen({ navigation }) {
  const [typeOpen, setTypeOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [types, setTypes] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Samsung', value: 'samsung' }
  ]);
  const [itemOpen, setItemOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'iPhone 5', value: 'i5' },
    { label: 'iPhone 5s', value: 'i5s' },
    { label: 'iPhone 6', value: 'i6' },
    { label: 'iPhone 6s', value: 'i6s' },
    { label: 'iPhone 7', value: 'i7' },
    { label: 'iPhone 8', value: 'i8' },
    { label: 'iPhone x', value: 'x' },
  ]);

  const [inputList, setInputList] = useState([{ id: 'item-0', type: "", item: "", quantity: 0 }]);
  const Item = ({ id }) => (
    <View style={styles.item}>
      {/* <Text style={styles.title}>{id}</Text> */}
      <View style={styles.dropdownContainer}>
        <DropDownPicker
          zIndex={3000}
          zIndexInverse={1000}
          open={typeOpen}
          value={value}
          items={types}
          setItems={setTypes}
          setOpen={setTypeOpen}
          setValue={setValue}
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
          zIndex={2000}
          zIndexInverse={2000}
          open={itemOpen}
          value={value}
          items={items}
          setItems={setItems}
          setOpen={setItemOpen}
          setValue={setValue}
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
          onPress={() => navigation.navigate('AddProduct')}
          style={[styles.btn, styles.btnColor]}>
          <Text style={styles.text}>+</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('AddProduct')}
          style={styles.btn}>
          <Text style={styles.text}>x</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2099e7" />
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        {/* <FlatList
          data={inputList}
          renderItem={({ item }) => <Item id={item.id} />}
          keyExtractor={item => item.id}
        /> */}
        {inputList.map(item => {
          return <Item id={item.id} key={item.id} />
        })}
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
  }
})