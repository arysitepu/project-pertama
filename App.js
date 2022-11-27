import React, { Component, } from "react";
import {Image, Text, TextInput, View, StyleSheet} from 'react-native';
import macbook from './gambar/macbook.jpg';

const App = () => {
  return (
  <StylingReactNativeComponent />
  )
}

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling text component</Text>
      <View style=
        {{
        width: 100, 
        height:100, 
        backgroundColor: '#0097e6', 
        borderWidth:2,
        borderColor: '#9c88ff',
        marginTop: 20,
        marginLeft: 20
        }} />

        <View style={{padding: 12, backgroundColor: '#F2F2F2', width: 212, borderRadius: 8}}>
          <Image source={macbook} style={{width: 188, height: 107, borderRadius: 8}} />
          <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>New Mekbuk pro 2080</Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#e84118', marginTop: 16}}>Rp. 1000.000.000</Text>
          <Text style={{fontSize: 12, fontWeight: '300', color: '#487eb0', marginTop: 12}}>Jakarta Pusat</Text>

          <View style=
          {{
            backgroundColor: '#4cd137', 
            paddingVertical: 6, 
            borderRadius: 250,
            marginTop: 20
            }}>
            <Text style=
            {{
              fontSize: 14, 
              fontWeight: '600', 
              color: 'white', 
              textAlign: 'center'
            }}>Beli</Text>
          </View>
        </View>
    </View>  
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize:18,
    fontWeight: 'bold',
    color: '#4cd137',
    marginLeft: 20,
    marginTop: 40
  }
})

const SampleComponent = () => {
  return (
    <View>
    <View style={{width: 80, height: 80, backgroundColor: '#0097e6'}} />
    <Text>Anto</Text>
    <Text>Laban</Text>
    <Text>Lele</Text>
    <Lindun />
    <Photo /> 
    <TextInput style={{borderWidth:1}} />
    <BoxGreen />
    <Profile />
  </View>
  )
}

const Lindun = () => {
  return <Text>Lindun Jual Ikan lele</Text>
}

const Photo = () => {
  return <Image source={{uri: 'https://placeimg.com/100/100/any'}} style={{width: 100, height: 100}} />
}

class BoxGreen extends Component{
  render(){
    return <Text>Ini komponen dari class</Text>
  }
}

class Profile extends Component{
  render(){
    return(
      <View>
        <Image source={{uri: 'https://placeimg.com/100/100/animals'}} style={{width: 100, height: 100, borderRadius: 50}}/>
        <Text style={{color: 'blue', fontSize: 24}}>Ini Hewan</Text>
      </View>
    ) 
  }
}
export default App;