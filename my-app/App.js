import { StatusBar } from 'expo-status-bar';
import { Children } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Box color={'#9d40e9'} relativeSize={4}/>
        
        <Box color={'#61a9fe'} relativeSize={4}/>
          
        <Box color={'#7638ff'} relativeSize={8}/> 
      </View>

      <View style={styles.row}>
      <Box color={'#9fbeff'} relativeSize={4}/>
        
      <Box color={'#61a9fe'} relativeSize={11}>
        <View style={{
          flexBasis:'100%',
          flexWrap: 'nowrap',
          flexDirection:'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent:'center'
        }}>
        <Text numberOfLines={1} ellipsizeMode ={'clip'} style={styles.Text}>FLEXBOX</Text>
        </View>
      </Box>
          
      <Box color={'#7301cb'} relativeSize={1}/> 
      </View>  


    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap:'wrap',
    flexDirection: 'row'
  },

  row: {
  flex:1,
},
  Text: {
    flexBasis:'200%',
    flexWrap: 'wrap',
    justifyContent: "space-between",
    alignContent:'center',
    fontFamily: 'monospace',
    fontSize: 90,
    transform: [{ rotate: '270deg'}]
  }

});

function Box({color,relativeSize,children}) {
  return (
<View style={{
    borderWidth:5,
    borderColor: '#3f3c35',
    backgroundColor: color,
    flex: relativeSize,
    flexWrap:'wrap',
    flexDirection:'column',
    rowGap: 10,
    columnGap:10
}}> 
  {
    children
  }
  
</View>
  )
}