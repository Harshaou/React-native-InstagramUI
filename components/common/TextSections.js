import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons, Entypo} from '@expo/vector-icons'



const Header = () => {
  
    return (
        <View>
      <View style={styles.containerOne}>
        <View style={styles.logoViewLeft}>
        <MaterialIcons name="account-circle" size={13} color="rgb(46, 38, 38)" />
        <MaterialIcons name="account-circle" size={13} color="rgb(46, 38, 38)" />
        <View>
        <Text style={{marginLeft: 5}}>
            Liked by <Text style={{fontWeight: 'bold'}}>neeharikha and 62,707 others</Text></Text>
        </View>
        </View>
      </View>

      <View style={styles.logoViewLeft} >
            <Text style={{fontWeight: 'bold'}}>Varun.aditya  </Text>
            <Text>Let the colors play the drama !</Text>
        </View>

        <View style={styles.logoViewLeft} >
            <Text>beautiful colors </Text>
            <Text style={{color: 'blue'}}>#Varun.aditya</Text>
        </View>

      </View>
    );
  }

  


const styles = StyleSheet.create({
  containerOne: {
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