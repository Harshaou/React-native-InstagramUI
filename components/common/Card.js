import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons, Entypo} from '@expo/vector-icons'



const Header = () => {
  
    return (
      <View style={styles.container}>
        
        <View style={styles.logoViewLeft}>
        <MaterialIcons name="account-circle" size={26} color="rgb(46, 38, 38)" />
        <Text>Varun.aditya</Text>
        </View>

        <View style={styles.logoViewRight}>
        <Entypo name="dots-three-vertical" size={14} color="black" />
        </View>

      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    
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