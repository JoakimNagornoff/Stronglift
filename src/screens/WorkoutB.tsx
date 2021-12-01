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
import CardViewA from '../components/CardViewA';
import CardViewB from '../components/CardVIewB';
import CardViewB2 from '../components/CardViewB2';
import {AddNewWorkoutB, isWorkoutADone} from '../store/Weights/actions/actions';
import {useAppSelector} from '../store/Weights/hooks';
import Icon from 'react-native-vector-icons/Feather';

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
        <TouchableOpacity
          style={styles.checkButton}
          onPress={() => {
            setIsFirstB(!isFirstB);
          }}>
          <Icon name={isFirstB ? 'check-circle' : 'circle'} size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.secondView}>
        <CardViewA />
        <TouchableOpacity
          style={styles.checkButton}
          onPress={() => {
            setIsSecondB(!isSecondB);
          }}>
          <Icon name={isSecondB ? 'check-circle' : 'circle'} size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.thirdView}>
        <CardViewB2 />
        <TouchableOpacity
          style={styles.checkButton}
          onPress={() => {
            setIsThirdB(!isThirdB);
          }}>
          <Icon name={isThirdB ? 'check-circle' : 'circle'} size={30} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
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
