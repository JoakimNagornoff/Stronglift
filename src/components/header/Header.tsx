import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import EditButton from '../buttons/EditButton';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <EditButton style2={styles.icon} />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 0.06,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
  icon: {
    position: 'absolute',
    right: 15,
  },
});
export default Header;
