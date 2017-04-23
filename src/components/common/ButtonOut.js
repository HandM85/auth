import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonOut = ({ onPress, children }) => {
 const { buttonStyle, textStyle } = styles;
 
 return (
  <TouchableOpacity onPress={onPress} style={buttonStyle}>
   <Text style={textStyle}>
    {children}
   </Text>
  </TouchableOpacity>
 );
};

const styles = {
 textStyle:{
  alignSelf: 'center',
  color: '#007aff',
  fontSize: 16,
  fontWeight: '600',
  paddingTop: 10,
  paddingBottom: 10
 },
 buttonStyle: {
  flexWrap: 'wrap',
  alignSelf: 'stretch',
  backgroundColor: '#fff',
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#007aff',
  marginLeft: 5,
  marginRight: 5,
  marginTop: 13
 }

};

export { ButtonOut };