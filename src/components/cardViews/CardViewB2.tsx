import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppSelector} from '../../store/Weights/hooks';
import {Count} from '../constans/constans';

const CardViewB2 = () => {
  const squat = useAppSelector(state => state.traning.squat);
  const overhead = useAppSelector(state => state.traning.overhead);
  const deadlift = useAppSelector(state => state.traning.deadlift);
  return (
    <View style={styles.item}>
      <View style={styles.firstView}>
        <Text style={styles.firstTitle}>WorkoutB</Text>
        <Text style={styles.firstText}>Squat</Text>
        <Text style={styles.firstText}>Overhead Press</Text>
        <Text style={styles.firstText}>Deadlift</Text>
      </View>
      <View style={styles.secondView}>
        <Text style={styles.secondTitle}>Fredag </Text>
        <Text style={styles.secondViewText}>
          5x5 {squat * Count.multiplier + Count.five} kg
        </Text>
        <Text style={styles.secondViewText}>5x5 {overhead + 2.5} kg</Text>
        <Text style={styles.secondViewText}>5x5 {deadlift + 5} kg</Text>
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
  firstTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  firstText: {
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
export default CardViewB2;
