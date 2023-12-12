import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Operation from './Operation'

const data = [
    {id: '4e2ec21d', from: 'Dispositivo #1', amount: '173,57', date: '28 mar. 16:40h', status: 'Completado'},
    {id: '3e5ec91b', from: 'Dispositivo #1', amount: '120,78', date: '27 mar. 09:16h', status: 'Completado'},
    {id: '5b24d69', from: 'Dispositivo #1', amount: '20,08', date: '26 mar. 13:43h', status: 'Completado'},
    {id: '7e1ec34t', from: 'Dispositivo #1', amount: '120,78', date: '25 mar. 09:20h', status: 'Completado'},
]

const Latest = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.flexRow, {justifyContent: 'space-between', paddingHorizontal: 2}]}>
            <Text style={styles.title}>Últimas operaciones</Text>
            <TouchableOpacity>
                <Text  style={styles.blueText}>Ver todo</Text>
            </TouchableOpacity>
        </View>
        <View style={{gap: 20}}>
            {data.map(operation => {
                    return <Operation key={operation.id} id={operation.id} from={operation.from} amount={operation.amount} date={operation.date} status={operation.status}/>
                })
            }    
        </View>
    </View>
  )
}

export default Latest

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ffffff',
        padding: 20,
        gap: 20
    },
    flexRow:{
        flexDirection: 'row',
        alignItems: 'center'
    },  
    title:{
        fontSize: 18,
        fontWeight: '500',
        color: '#1d2c63'
    },
    blueText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#448cd5'
    }
})