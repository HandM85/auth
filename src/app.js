import React, { Component }  from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

 componentWillMount(){
  firebase.initializeApp(
  {
    apiKey: 'AIzaSyCntSWHCNET3JzeQq0xK-SAr52611h9eNw',
    authDomain: 'authentication-530ac.firebaseapp.com',
    databaseURL: 'https://authentication-530ac.firebaseio.com',
    storageBucket: 'authentication-530ac.appspot.com',
    messagingSenderId: '314098592869'
  });
 }
 
 
render(){
 return (
   <View>
     <Header headerText="Authentication"  />
     <LoginForm />
   </View>
  );
 }
}

export default App;