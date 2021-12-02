import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const EditButton = props => {
  return (
    <TouchableOpacity style={props.style2} onPress={props.onPress}>
      <Icon name={'edit-2'} size={20} />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    height: 20,
    width: 20,
  },
  buttonText: {
    fontSize: 22,
  },
});

export default EditButton;
