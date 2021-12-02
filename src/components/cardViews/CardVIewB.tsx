import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useAppSelector} from '../../store/Weights/hooks';

const CardViewB = () => {
  const squat = useAppSelector(state => state.traning.squat);
  const overhead = useAppSelector(state => state.traning.overhead);
  const deadlift = useAppSelector(state => state.traning.deadlift);
  const isWorkoutADone = useAppSelector(state => state.traning.isWorkoutADone);

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
        {isWorkoutADone && (
          <>
            <Text style={styles.secondViewText}>5x5 {squat} kg</Text>
            <Text style={styles.secondViewText}>5x5 {overhead} kg</Text>
            <Text style={styles.secondViewText}>5x5 {deadlift} kg</Text>
          </>
        )}
        {!isWorkoutADone && (
          <>
            <Text style={styles.secondViewText}>5x5 {squat + 2.5} kg</Text>
            <Text style={styles.secondViewText}>5x5 {overhead + 2.5} kg</Text>
            <Text style={styles.secondViewText}>5x5 {deadlift + 5} kg</Text>
          </>
        )}
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
