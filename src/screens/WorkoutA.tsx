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
import CardViewA2 from '../components/CardViewA2';
import CardViewB from '../components/CardVIewB';

import {AddNewWorkoutA, WorkoutAdone} from '../store/Weights/actions/actions';
import {useAppSelector} from '../store/Weights/hooks';

//what do to

//2. fix buttons for done workout for every day
//3. edit weight and add to redux store

const WorkoutA = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //selectors
  const squat = useAppSelector(state => state.traning.squat);
  const bench = useAppSelector(state => state.traning.bench);
  const barbellrow = useAppSelector(state => state.traning.barbellrow);
  const overhead = useAppSelector(state => state.traning.overhead);
  const deadlift = useAppSelector(state => state.traning.deadlift);

  const newWorkout = () => {
    //dispatch function everything from the week to workout B
    const newSquat = squat + 7.5;
    const newBench = bench + 5;
    const newBarbellrow = barbellrow + 5;
    const newOverhead = overhead + 2.5;
    const newDeadlift = deadlift + 5;
    dispatch(
      AddNewWorkoutA(
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
        <CardViewA />
      </View>
      <View style={styles.secondView}>
        <CardViewB />
      </View>
      <View style={styles.thirdView}>
        <CardViewA2 />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('WorkoutB');
            newWorkout();
            dispatch(WorkoutAdone());
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
  firsViewButton: {
    alignItems: 'center',
  },
});

export default WorkoutA;
