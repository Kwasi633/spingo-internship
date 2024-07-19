import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const Homepage = () => {
  return (
    <View style={{flex: 1}}>
    <View style={{height: 40, backgroundColor: 'red'}}>
    <ScrollView horizontal={true} contentContainerStyle={{ alignItems: 'center' }}>
    <Text style={{color: 'black'}}>Canned Goods</Text>
    <Text style={{color: 'black'}}>Canned Goods</Text>
    <Text style={{color: 'black'}}>Canned Goods</Text>
    <Text style={{color: 'black'}}>Canned Goods</Text>
    <Text style={{color: 'black'}}>Canned Goods</Text>
    <Text style={{color: 'black'}}>Canned Goods</Text>
    <Text style={{color: 'black'}}>Canned Goods</Text>
   
      </ScrollView>
        
    </View>
      
      <Text style={{color: 'black'}}>Homepage</Text>
    </View>
  )
}

export default Homepage