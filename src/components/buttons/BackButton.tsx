import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const BackButton = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={props.style1} onPress={() => navigation.goBack()}>
      <Icon name={'arrow-left'} size={20} />
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

export default BackButton;
