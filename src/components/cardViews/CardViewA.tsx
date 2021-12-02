import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {useAppSelector} from '../../store/Weights/hooks';

const CardViewA = () => {
  const squat = useAppSelector(state => state.traning.squat);
  const bench = useAppSelector(state => state.traning.bench);
  const barbellrow = useAppSelector(state => state.traning.barbellrow);
  const isWorkoutADone = useAppSelector(state => state.traning.isWorkoutADone);

  return (
    <View style={styles.item}>
      <View style={styles.firstView}>
        <Text style={styles.title}>WorkoutA</Text>
        <Text>Squat</Text>
        <Text>Bench</Text>
        <Text>Barbell row</Text>
      </View>
      <View style={styles.secondView}>
        <Text style={styles.secondTitle}>Today </Text>
        {isWorkoutADone && (
          <>
            <Text style={styles.secondViewText}>5x5 {squat + 2.5} kg</Text>
            <Text style={styles.secondViewText}>5x5 {bench + 2.5} kg</Text>
            <Text style={styles.secondViewText}>5x5 {barbellrow + 2.5} kg</Text>
          </>
        )}
        {!isWorkoutADone && (
          <>
            <Text style={styles.secondViewText}>5x5 {squat} kg</Text>
            <Text style={styles.secondViewText}>5x5 {bench} kg</Text>
            <Text style={styles.secondViewText}>5x5 {barbellrow} kg</Text>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
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
export default CardViewA;
