import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import CardViewA from '../components/CardViewA';
import CardViewB from '../components/CardVIewB';
import CardViewB2 from '../components/CardViewB2';

const WorkoutB = () => {
  const navigation = useNavigation();

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
