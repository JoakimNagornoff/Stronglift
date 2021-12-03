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
import {Count} from '../components/constans/constans';

//what do to
//1. Animation for done workout

// DO LATER give every card an id and try to edit one.
// DO LATER edit weight and add to redux store

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
    const newSquat = squat * Count.multiplier + Count.seven;
    const newBench = bench * Count.multiplier + Count.twoFive;
    const newBarbellrow = barbellrow * Count.multiplier + Count.twoFive;
    const newOverhead = overhead * Count.multiplier + Count.five;
    const newDeadlift = deadlift * Count.multiplier + Count.ten;
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
      <View
        style={{
          flex: 0.37,
          backgroundColor: isFirstA ? '#D3D3D3' : 'white',
        }}>
        <CardViewA />
        <TouchableOpacity
          onPress={() => {
            setIsFirstA(!isFirstA);
          }}
          style={styles.checkButton}>
          <Icon name={isFirstA ? 'check-circle' : 'circle'} size={30} />
        </TouchableOpacity>
      </View>

      <View style={{flex: 0.37, backgroundColor: isSecondA ? 'gray' : 'white'}}>
        <CardViewB />
        <TouchableOpacity
          style={styles.checkButton}
          onPress={() => setIsSecondA(!isSecondA)}>
          <Icon name={isSecondA ? 'check-circle' : 'circle'} size={30} />
        </TouchableOpacity>
      </View>
      <View
        style={{flex: 0.37, backgroundColor: isThirdA ? '#D3D3D3' : 'white'}}>
        <CardViewA2 />
        <TouchableOpacity
          onPress={() => {
            setIsThirdA(!isThirdA);
          }}
          style={styles.checkButton}>
          <Icon name={isThirdA ? 'check-circle' : 'circle'} size={30} />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 10}}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: !Boolean(isFirstA && isSecondA && isThirdA)
              ? 'white'
              : '#89CFF0',
            padding: 10,
          }}
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
    backgroundColor: 'white',
  },
  firstView: {},
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
