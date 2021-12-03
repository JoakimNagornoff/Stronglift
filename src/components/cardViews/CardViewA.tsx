import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {useAppSelector} from '../../store/Weights/hooks';
import {Count} from '../constans/constans';

const CardViewA = () => {
  const squat = useAppSelector(state => state.traning.squat);
  const bench = useAppSelector(state => state.traning.bench);
  const barbellrow = useAppSelector(state => state.traning.barbellrow);
  const isWorkoutADone = useAppSelector(state => state.traning.isWorkoutADone);

  return (
    <View style={styles.item}>
      <View style={styles.firstView}>
        <Text style={styles.title}>WorkoutA</Text>
        <Text style={styles.text}>Squat</Text>
        <Text style={styles.text}>Bench</Text>
        <Text style={styles.text}>Barbell row</Text>
      </View>
      <View style={styles.secondView}>
        {isWorkoutADone && (
          <>
            <Text style={styles.secondTitle}>Onsdag </Text>
            <Text style={styles.secondViewText}>
              5x5 {squat * Count.multiplier + Count.twoFive} kg
            </Text>
            <Text style={styles.secondViewText}>5x5 {bench + 2.5} kg</Text>
            <Text style={styles.secondViewText}>5x5 {barbellrow + 2.5} kg</Text>
          </>
        )}
        {!isWorkoutADone && (
          <>
            <Text style={styles.secondTitle}>Today </Text>
            <Text style={styles.secondViewText}>5x5 - {squat} kg</Text>
            <Text style={styles.secondViewText}>5x5 - {bench} kg</Text>
            <Text style={styles.secondViewText}>5x5 - {barbellrow} kg</Text>
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
  text: {
    marginTop: 10,
    marginBottom: 10,
  },
  secondTitle: {
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
  },
  secondViewText: {
    textAlign: 'right',
    marginTop: 10,
    marginBottom: 10,
  },
});
export default CardViewA;
