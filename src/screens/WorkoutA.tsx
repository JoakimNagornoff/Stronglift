import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';

import CardViewA from '../components/cardViews/CardViewA';
import CardViewA2 from '../components/cardViews/CardViewA2';
import CardViewB from '../components/cardViews/CardVIewB';

import {AddNewWorkoutA, WorkoutAdone} from '../store/Weights/actions/actions';
import {useAppSelector} from '../store/Weights/hooks';

import Icon from 'react-native-vector-icons/Feather';

//what do to
//1. make edit screen
//2. give every card an id and try to edit one.
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

  const [isFirstA, setIsFirstA] = useState(false);
  const [isSecondA, setIsSecondA] = useState(false);
  const [isThirdA, setIsThirdA] = useState(false);

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
        <TouchableOpacity onPress={() => console.log('pressed')}>
          <Icon name={'edit-2'} size={20} />
        </TouchableOpacity>
        <CardViewA />

        <TouchableOpacity
          onPress={() => {
            setIsFirstA(!isFirstA);
          }}
          style={styles.checkButton}>
          <Icon name={isFirstA ? 'check-circle' : 'circle'} size={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.secondView}>
        <CardViewB />
        <TouchableOpacity
          style={styles.checkButton}
          onPress={() => setIsSecondA(!isSecondA)}>
          <Icon name={isSecondA ? 'check-circle' : 'circle'} size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.thirdView}>
        <CardViewA2 />
        <TouchableOpacity
          onPress={() => {
            setIsThirdA(!isThirdA);
          }}
          style={styles.checkButton}>
          <Icon name={isThirdA ? 'check-circle' : 'circle'} size={30} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          disabled={!Boolean(isFirstA && isSecondA && isThirdA)}
          onPress={() => {
            navigation.navigate('WorkoutB');
            newWorkout();
            dispatch(WorkoutAdone());
            setIsFirstA(!isFirstA);
            setIsSecondA(!isSecondA);
            setIsThirdA(!isThirdA);
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
  checkButton: {
    alignItems: 'center',
  },
});

export default WorkoutA;
