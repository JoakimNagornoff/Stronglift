import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {connect, ConnectedProps, useDispatch, useSelector} from 'react-redux';
import {compose} from 'redux';
import {RootState} from '../store';
import {AddTraningDayA} from '../store/Weights/actions/actions';
import {TraningState} from '../store/Weights/actions/types';

//slutade här: fixa dipsatch function så nåt läggs till till storen

const CardViewA = () => {
  const squat = useSelector((state: RootState) => state.traning.squat);

  const bench = useSelector((state: RootState) => state.traning.bench);
  const barbellrow = useSelector(
    (state: RootState) => state.traning.barbellrow,
  );

  const [isMondayDone, setIsMondayDone] = useState(false);
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
export default CardViewA;
