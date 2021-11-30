import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import CardViewA from '../components/CardViewA';
import CardViewB from '../components/CardVIewB';

const WorkoutA = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.firstView}>
        <CardViewA />
      </View>
      <View style={styles.secondView}>
        <CardViewB />
      </View>
      <View style={styles.thirdView}>
        <CardViewA />
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

export default WorkoutA;
