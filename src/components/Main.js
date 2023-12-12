import React from 'react'
import { StyleSheet, View } from 'react-native'
import Constants from 'expo-constants';
import Nav from './nav';
import Header from './Header';
import News from './News';
import Latest from './Latest';
import Footer from './footer';

const Main = () => {
  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
        <View style={[styles.container, {backgroundColor:'#448cd5'}]}>
            <Nav />
            <Header />
        </View>
        <News/>
        <Latest/>
        <Footer/>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    container: { 
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight,
    },
  }
)