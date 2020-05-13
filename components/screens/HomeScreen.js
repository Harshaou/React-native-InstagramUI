import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList ,ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios'
import Header from '../common/Header'
import Card from '../common/Card'
import BottomCard from '../common/BottomCard'
import TextSection from '../common/TextSections'

class HomeScreen extends Component {

  state = {
    comments: [],
    showComment: false
  }

  componentDidMount(){
    axios.get('http://cookbookrecipes.in/test.php')
    .then(res => this.setState((state => ({comments: res.data})))
    )
}

renderComments = () => {
 return  <FlatList
         data={this.state.comments}
         renderItem={({item}) => {
         return (
           <View style={{flexDirection: "row", alignItems: "center", marginRight: 5}}>
             <Text style={styles.comments}>{item.username}</Text>
              <Text>{item.comments}</Text>
           </View>
         )
         
         }}
          />
}

handleShowComment = () => {
  this.setState((state) => ({
    showComment: !state.showComment
  }))
}

  render() {
    
    return (
      
      <ScrollView style={styles.container}>
        <Header />

        <View>
        <Card />
        <View style={styles.img}>
        <Image
        style={styles.img} 
        source={{uri: "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}} />
        </View>

         <BottomCard />
         <TextSection />
         </View>

        <TouchableOpacity onPress={() => this.handleShowComment()}>
         <View style={{marginLeft: 10}}>
         <Text style={{color: 'blue'}}>View all 30 comments </Text>
         {this.state.showComment ? this.renderComments() : null}
         </View>
         </TouchableOpacity>
        
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    img: {
        width: '100%',
        height: 550
    },
    comments: {
      marginTop: 10,
      marginLeft: 20,
      height: 30,
      borderColor: 1,
      fontWeight: 'bold'
    }
  });

export default HomeScreen;
