import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Svg, { Path } from "react-native-svg"

const Footer = (path) => {
  path = 'home'
  return (
        <View style={styles.flexRow}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 35}}>
                <TouchableOpacity style={styles.item}>
                    <Svg height="17" width="19" viewBox="0 0 576 512">
                        <Path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" fill={path==='home' && '#448cd5' || '#808080'}/>
                    </Svg>
                    <Text style={path==='home' && {color: '#448cd5', fontSize: 13} || styles.text}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Svg width="19" height="19" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
                        <Path d="M18.5 2h-12C4.57 2 3 3.57 3 5.5V22l7-3.5 7 3.5v-9h5V5.5C22 3.57 20.43 2 18.5 2zM13 11H7V9h6v2zm7 0h-3V5.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5V11z" fill={path==='pagos' && '#448cd5' || '#808080'}></Path>
                    </Svg>
                    <Text style={path==='pagos' && {color: '#448cd5', fontSize: 13} || styles.text}>Pagos</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.absolute}>
                <TouchableOpacity style={styles.button}>
                    <Svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> 

                        <Path d="M17.7495 7.04997C17.5095 7.00997 17.2595 6.99998 16.9995 6.99998H6.99945C6.71945 6.99998 6.44945 7.01998 6.18945 7.05998C6.32945 6.77998 6.52945 6.52001 6.76945 6.28001L10.0195 3.02C11.3895 1.66 13.6095 1.66 14.9795 3.02L16.7295 4.78996C17.3695 5.41996 17.7095 6.21997 17.7495 7.04997Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <Path d="M9 19C9 19.75 8.79 20.46 8.42 21.06C7.73 22.22 6.46 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 16.79 2.79 15 5 15C7.21 15 9 16.79 9 19Z" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <Path d="M6.48977 18.98H3.50977" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <Path d="M5 17.52V20.51" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <Path d="M22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <Path d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>
                </TouchableOpacity>    
            </View>

            <View  style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>

                <TouchableOpacity style={styles.item}>
                    <Svg height="17" width="13" viewBox="0 0 384 512">
                        <Path d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8V488c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488V24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96zM80 352c0 8.8 7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96z" fill={path==='marketplace' && '#448cd5' || '#808080'}/>
                    </Svg>
                    <Text style={path==='marketplace' && {color: '#448cd5', fontSize: 13} || styles.text}>Marketplace</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Svg height="17" width="21" viewBox="0 0 640 512">
                        <Path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" fill={path==='clientes' && '#448cd5' || '#808080'}/>
                    </Svg>
                    <Text style={path==='clientes' && {color: '#448cd5', fontSize: 13} || styles.text}>Clientes</Text>
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    flexRow: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        paddingHorizontal: 20,
    },
    item:{
        alignItems: 'center',
        
    },
    text:{
        fontSize: 14,
        color: '#808080'
    },
    absolute:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: -25,
        alignItems: 'center'
    },
    button:{
        backgroundColor:'#448cd5', 
        borderRadius: 100, 
        padding: 15,
        shadowColor: "#448cd5",
        shadowOffset: {
        width: 0,
        height: 12,
        },
        shadowOpacity:  0.23,
        shadowRadius: 12.81,
        elevation: 16
    }
})