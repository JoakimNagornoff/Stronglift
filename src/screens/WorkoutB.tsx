import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import CardViewA from '../components/CardViewA';
import CardViewB from '../components/CardVIewB';
import CardViewB2 from '../components/CardViewB2';
import {AddNewWorkoutB, isWorkoutADone} from '../store/Weights/actions/actions';
import {useAppSelector} from '../store/Weights/hooks';

const WorkoutB = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const squat = useAppSelector(state => state.traning.squat);
  const bench = useAppSelector(state => state.traning.bench);
  const barbellrow = useAppSelector(state => state.traning.barbellrow);
  const overhead = useAppSelector(state => state.traning.overhead);
  const deadlift = useAppSelector(state => state.traning.deadlift);

  const newWorkoutB = () => {
    const newSquat = squat + 7.5;
    const newBench = bench + 2.5;
    const newBarbellrow = barbellrow + 2.5;
    const newOverhead = overhead + 5;
    const newDeadlift = deadlift + 10;
    dispatch(
      AddNewWorkoutB(
        newSquat,
        newBench,
        newBarbellrow,
        newOverhead,
        newDeadlift,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.firstView}>
        <CardViewB />
      </View>
      <View style={styles.secondView}>
        <CardViewA />
      </View>
      <View style={styles.thirdView}>
        <CardViewB2 />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('WorkoutA');
            newWorkoutB();
            dispatch(isWorkoutADone());
          }}>
          <Text>DONE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstView: {
    flex: 0.3,
  },
  secondView: {
    flex: 0.3,
  },
  thirdView: {
    flex: 0.3,
  },
});

export default WorkoutB;
