import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {AntDesign, EvilIcons, FontAwesome} from '@expo/vector-icons'
import TextSection from '../common/TextSections'


const Header = () => {
  
    return (
      <View style={styles.container}>
        
        <View style={styles.logoViewLeft}>
            <FontAwesome name="heart-o" size={24} color="black" />
            <FontAwesome name="comment-o" style={{marginLeft: 8}} size={26} color="black" />
            <EvilIcons name="sc-telegram" style={{marginLeft: 6}} size={36} color="black" />
        </View>

        <View style={styles.logoViewRight}>
        <FontAwesome name="bookmark-o" size={24} color="black" />
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