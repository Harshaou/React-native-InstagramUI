import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {AntDesign, EvilIcons, MaterialIcons} from '@expo/vector-icons'



const Header = () => {
  
    return (
      <View style={styles.container}>
        
        <View style={styles.logoViewLeft}>
            <AntDesign name="instagram" size={32} color="black" />
            <Text style={styles.logoLeftText}>Instagram</Text>
        </View>

        <View style={styles.logoViewRight}>
        <EvilIcons name="sc-telegram" size={32} color="black" />
        </View>

      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: "space-between",
    elevation: 4,
    shadowOffset: {width: 0, height: 3},
    shadowColor: 'black',
    shadowOpacity: 0.3,
    marginTop: 30
    
  },
  logoViewLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    marginLeft: 10
  },
  logoLeftText: {
    fontSize: 18,
    marginLeft: 3,
    fontWeight: 'bold'
    
  },

  logoViewRight: {
      width: 130,
      flexDirection: "row",
      marginRight: 10,
      justifyContent: 'flex-end'
  }
  
})


export default Header