import React,{useState} from 'react';
import {View,StyleSheet,Dimensions,Text, SafeAreaView,TextInput, TouchableOpacity} from 'react-native';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function CurrencyConvert() {

  const [amount,setAmount] = useState('')
  const [amountCurrency,setAmountCurrency] = useState('')

  const HandleInput = () =>{
   let convert = parseFloat(amount * 1300)
    setAmountCurrency(String(convert))
    setAmount('')
  }

  return (
 <SafeAreaView style={styles.container}>
    <View style={styles.content}> 
    <TextInput placeholder="Enter amount ..." 
    keyboardType='numeric'
    value={amount}
    onChangeText={setAmount}
    style={styles.textinput}/>
   <Text style={styles.amount}>The currency:{amountCurrency} RWF</Text>
   <TouchableOpacity onPress={HandleInput} style={styles.button}><Text style={styles.btntext}>Handle</Text></TouchableOpacity>
   </View>
 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
    margin:20,
    backgroundColor:"",
    width:width,
    height:height,
    display:"flex",
    justifyContent:"center"
    },
    content: {
    padding:20,
    },
    textinput: {
    borderWidth:1,
    borderColor:"teal",
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:10
   },
   amount:{
    paddingVertical:40,
    fontSize:20,
    textAlign:"center",
    color:"teal"
   },
   button:{
    backgroundColor:"teal",
    borderRadius:8,
    paddingVertical:10,
   },
   btntext:{
    textAlign:"center",
    color:"white",
    fontWeight:"bold",
    fontSize:20
   }
  });
  