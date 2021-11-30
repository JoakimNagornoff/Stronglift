import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

const CardViewB = () => {
  return (
    <View style={styles.item}>
      <View style={styles.firstView}>
        <Text style={styles.title}>WorkoutB</Text>
        <Text>Squat</Text>
        <Text>Overhead Press</Text>
        <Text>Deadlift</Text>
      </View>
      <View style={styles.secondView}>
        <Text style={styles.secondTitle}>Today </Text>
        <Text style={styles.secondViewText}>Squat</Text>
        <Text style={styles.secondViewText}>Bench</Text>
        <Text style={styles.secondViewText}>Barbell row</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 2,
    flexDirection: 'row',
  },
  firstView: {
    flexDirection: 'column',
    flex: 0.5,
  },
  secondView: {
    flexDirection: 'column',
    flex: 0.5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  secondTitle: {
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
  },
  secondViewText: {
    textAlign: 'right',
  },
});
export default CardViewB;