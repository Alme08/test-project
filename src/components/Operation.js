import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Operation = ({id, from, amount, date, status}) => {
  return (
    <View style={styles.container}>

      <View style={styles.flexRow}>
        <View style={styles.flexRow}>
          <TouchableOpacity style={{paddingRight: 5}}>
            <Text style={styles.id}>#{id}</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 12}}>{from}</Text>
        </View>
        <Text style={{fontSize: 15, fontWeight: 500}}>{amount} Є</Text>
      </View>

      <View style={styles.flexRow}>
        <Text>{date}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>

      <View style={ styles.line} />
    </View>
  )
}

export default Operation

const styles = StyleSheet.create({
  container: {
    gap: 10
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  id: {
    fontSize: 15,
    fontWeight: '500',
    color: '#448cd5'
  },
  line: {
    borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
  },
  status: {
    fontSize: 13,
    fontWeight: '500',
    paddingHorizontal: 6,
    paddingVertical: 2,
    backgroundColor: '#e6ffe6',
    borderRadius: 10
  }
  
})