import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import CardViewA from '../components/cardViews/CardViewA';
import CardViewB from '../components/cardViews/CardVIewB';
import CardViewB2 from '../components/cardViews/CardViewB2';
import {AddNewWorkoutB, isWorkoutADone} from '../store/Weights/actions/actions';
import {useAppSelector} from '../store/Weights/hooks';
import Icon from 'react-native-vector-icons/Feather';
import {Count} from '../components/constans/constans';

const WorkoutB = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const squat = useAppSelector(state => state.traning.squat);
  const bench = useAppSelector(state => state.traning.bench);
  const barbellrow = useAppSelector(state => state.traning.barbellrow);
  const overhead = useAppSelector(state => state.traning.overhead);
  const deadlift = useAppSelector(state => state.traning.deadlift);

  const [isFirstB, setIsFirstB] = useState(false);
  const [isSecondB, setIsSecondB] = useState(false);
  const [isThirdB, setIsThirdB] = useState(false);

  const newWorkoutB = () => {
    const newSquat = squat * Count.multiplier + Count.seven;
    const newBench = bench * Count.multiplier + Count.twoFive;
    const newBarbellrow = barbellrow * Count.multiplier + Count.twoFive;
    const newOverhead = overhead * Count.multiplier + Count.five;
    const newDeadlift = deadlift * Count.multiplier + Count.ten;
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
      <View style={{flex: 0.37, backgroundColor: isFirstB ? 'gray' : 'white'}}>
        <CardViewB />
        <TouchableOpacity
          style={styles.checkButton}
          onPress={() => {
            setIsFirstB(!isFirstB);
          }}>
          <Icon name={isFirstB ? 'check-circle' : 'circle'} size={30} />
        </TouchableOpacity>
      </View>
      <View
        style={{flex: 0.37, backgroundColor: isSecondB ? '#D3D3D3' : 'white'}}>
        <CardViewA />
        <TouchableOpacity
          style={styles.checkButton}
          onPress={() => {
            setIsSecondB(!isSecondB);
          }}>
          <Icon name={isSecondB ? 'check-circle' : 'circle'} size={30} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.37, backgroundColor: isThirdB ? 'gray' : 'white'}}>
        <CardViewB2 />
        <TouchableOpacity
          style={styles.checkButton}
          onPress={() => {
            setIsThirdB(!isThirdB);
          }}>
          <Icon name={isThirdB ? 'check-circle' : 'circle'} size={30} />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 10}}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: !Boolean(isFirstB && isSecondB && isThirdB)
              ? 'white'
              : '#89CFF0',
            padding: 10,
          }}
          disabled={!Boolean(isFirstB && isSecondB && isThirdB)}
          onPress={() => {
            navigation.navigate('WorkoutA');
            newWorkoutB();
            dispatch(isWorkoutADone());
            setIsFirstB(!isFirstB);
            setIsSecondB(!isSecondB);
            setIsThirdB(!isThirdB);
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
  firstView: {
    flex: 0.3,
  },
  secondView: {
    flex: 0.3,
  },
  thirdView: {
    flex: 0.3,
  },
  checkButton: {
    alignItems: 'center',
  },
});

export default WorkoutB;
