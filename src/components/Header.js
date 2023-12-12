import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Svg, { Path } from "react-native-svg"

const Header = ({show=true}) => {
  return (
    <View>
        <View style={styles.container}>
            <TouchableOpacity style={styles.flexRow}>
                <Text style={styles.primary}>Saldo disponible</Text>
                <Svg height="14" width="16" viewBox="0 0 576 512">
                    <Path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" fill="#ffffff"/>
                </Svg>
            </TouchableOpacity>
            <Text style={styles.title}>{show && '678,64 Є' || '---,--'}</Text>
            <View style={styles.flexRow}>
                <Text style={[styles.primary, {fontWeight: 300}]}>Saldo pendiente</Text>
                <Text style={[styles.primary, {fontWeight: 500}]}>0,00 Є</Text>
            </View>
        </View>
        
        <View style={styles.line}/>

        <View style={[styles.flexRow, {marginBottom: 25, gap: 4}]}>
            <Text style={styles.secondary}>Hoy 15 ventas</Text>
            <Text style={[styles.secondary, {}] }>348,00 Є</Text>
            <TouchableOpacity style={[styles.flexRow, {gap: 0}]}>
                <Text style={styles.secondary}>Ver balances</Text>
                <Svg width="24" height="24" viewBox="0 -1 24 24">
                    <Path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"  fill="#ffffff"></Path>
                </Svg>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
        gap: 8
    },
    flexRow:{
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 35,
        fontWeight: '600',
        color: '#ffffff'
    },
    primary: {
        fontSize: 15,
        color: '#ffffff'
    },
    secondary: {
        fontSize: 15,
        color: '#ffffff'
    },
    line:{
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        marginVertical: 15
    }
})