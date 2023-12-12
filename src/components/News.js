import React from 'react'
import { StyleSheet, Text, TouchableOpacity, } from 'react-native'
import Svg, { Path } from "react-native-svg"

const News = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Novedades</Text>
      <Svg width="24" height="24" viewBox="2 1 21 21" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
        <Path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></Path>
      </Svg>
    </TouchableOpacity>
  )
}

export default News

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f0f2f5',
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    text:{
        fontSize: 18,
        fontWeight: '500',
        color: '#1d2c63',
        paddingHorizontal: 2,        
    }
})