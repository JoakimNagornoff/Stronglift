import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CardListA = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>Måndag</Text>
        <Text>Squat</Text>
        <Text>Bench</Text>
        <Text>Barbell row</Text>
      </View>
      <View style={styles.item}>
        <Text>Onsdag</Text>
        <Text>Squat</Text>
        <Text>Overhead</Text>
        <Text>Deadlift</Text>
      </View>
      <View style={styles.item}>
        <Text>Fredag</Text>
        <Text>Squat</Text>
        <Text>Bench</Text>
        <Text>Barbell row</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 2,
  },
});
export default CardListA;
