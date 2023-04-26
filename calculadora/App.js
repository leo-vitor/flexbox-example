import React, {useState,onPress} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

function CalculatorButton({content,color,onPress }) {
  return(
  
  <TouchableHighlight onPress={onPress} underlayColor={'#272b34'} activeOpacity={0.4}>
  <View style={[styles.button, {color: color}]}>
    <Text style={{
      fontSize:20,
      width:'100%',
      height:'100%',
      color:color,
      textAlign:'center',
      textAlignVertical:'center'
    }}>{content}</Text>
  </View>
</TouchableHighlight>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tela}>
      
      </View>
      <View style={styles.teclado}>
        <View style={styles.coluna}>
          <CalculatorButton content={'AC'} color={'#3ae2bf'}/>
          <CalculatorButton content={'7'} color={'white'}/>
          <CalculatorButton content={'4'} color={'white'}/>
          <CalculatorButton content={'1'} color={'white'}/>
          <CalculatorButton content={'1'} color={'white'}/>
        </View>
        <View style={styles.coluna}>
          <CalculatorButton content={'+/-'} color={'#3ae2bf'}/>
          <CalculatorButton content={'8'} color={'white'}/>
          <CalculatorButton content={'5'} color={'white'}/>
          <CalculatorButton content={'2'} color={'white'}/>
          <CalculatorButton content={'0'} color={'white'}/>
        </View>
        <View style={styles.coluna}>
          <CalculatorButton content={'%'} color={'#3ae2bf'}/>
          <CalculatorButton content={'9'} color={'white'}/>
          <CalculatorButton content={'6'} color={'white'}/>
          <CalculatorButton content={'3'} color={'white'}/>
          <CalculatorButton content={'.'} color={'white'}/>
        </View>
        <View style={styles.coluna}>
          <CalculatorButton content={'0/0'} color={'#c16a73'}/>
          <CalculatorButton content={'x'} color={'#c16a73'}/>
          <CalculatorButton content={'-'} color={'#c16a73'}/>
          <CalculatorButton content={'+'} color={'#c16a73'}/>
          <CalculatorButton content={'='} color={'#c16a73'}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#22252e',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  tela: {
    flex:4,
    width:'100%',
    flexWrap:'wrap',
    backgroundColor:'#22252e',

  },
  teclado:{
    flex:6,
    flexDirection: 'row',
    width:'100%',
    flexWrap:'wrap',
    backgroundColor:'#292d36',
    borderTopRightRadius:50,
    borderTopLeftRadius:50
  },
  coluna: {
    flex:1,
    flexDirection:'column',
    backgroundColor:'#292d36',
    height:'100%',
    width:'100%',
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
    justifyContent: 'space-between',
    alignContent: 'center',
    margin:10,
  },
  button:{
    flexGrow:1,
    width:'100%',
    height:'15%',
    backgroundColor: '#272b34',
    borderRadius:30,
    alignItems:'center',
    alignContent: 'center',
    
    padding:10
    


    
    
  },
  



  
});
