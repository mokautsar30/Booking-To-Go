import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderList = () => {
  return (
    <View style={styles.container} >
      <Text>OrderList</Text>
    </View>
  )
}

export default OrderList

const styles = StyleSheet.create({
  container: {
    flex: '1',
    justifyContent: 'center',
    alignItems: 'center'
  }
})