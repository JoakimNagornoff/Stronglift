import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppSelector} from '../../store/Weights/hooks';

const CardViewA2 = () => {
  const squat = useAppSelector(state => state.traning.squat);
  const bench = useAppSelector(state => state.traning.bench);
  const barbellrow = useAppSelector(state => state.traning.barbellrow);

  return (
    <View style={styles.item}>
      <View style={styles.firstView}>
        <Text style={styles.title}>WorkoutA</Text>
        <Text>Squat</Text>
        <Text>Bench</Text>
        <Text>Barbell row</Text>
      </View>
      <View style={styles.secondView}>
        <Text style={styles.secondTitle}>Fredag </Text>
        <Text style={styles.secondViewText}>5x5 {squat + 5} kg</Text>
        <Text style={styles.secondViewText}>5x5 {bench + 2.5} kg</Text>
        <Text style={styles.secondViewText}>5x5 {barbellrow + 2.5} kg</Text>
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
  buttonView: {
    backgroundColor: 'red',
    flexDirection: 'row-reverse',
  },
});
export default CardViewA2;
