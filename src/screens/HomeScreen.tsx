import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';

const CARD_WIDTH = Dimensions.get('window').width * 0.8;
const CARD_HEIGHT = Dimensions.get('window').height * 0.7;

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    margin: 5,
    borderRadius: 15,
  },
});

export default HomeScreen;
