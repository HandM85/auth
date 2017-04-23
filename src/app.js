import React, { Component }  from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, ButtonOut, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  
  state = { loggedIn: null };

 componentWillMount(){
  firebase.initializeApp(
  {
    apiKey: 'AIzaSyCntSWHCNET3JzeQq0xK-SAr52611h9eNw',
    authDomain: 'authentication-530ac.firebaseapp.com',
    databaseURL: 'https://authentication-530ac.firebaseio.com',
    storageBucket: 'authentication-530ac.appspot.com',
    messagingSenderId: '314098592869'
  });
   
  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
 }
 
 
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <ButtonOut onPress={() => firebase.auth().signOut()}>
            Log Out
          </ButtonOut>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
  
render(){
 return (
   <View>
     <Header headerText="Authentication"  />
     {this.renderContent()}
   </View>
  );
 }
}


export default App;