import React from 'react';
import {View, FlatList, StyleSheet, Text, SafeAreaView} from 'react-native';

const DATA = [
  {
    id: '4',
    theme: 1,
    title: 'Monday',
    Squat: 'Squat',
    Overhead: 'Overhead press',
    Deadlift: 'Deadlift',
  },
  {
    id: '5',
    theme: 2,
    title: 'Wednesday',
    Squat: 'Squat',
    Bench: 'Bench Press',
    Barbell: 'Barbell row',
  },
  {
    id: '6',
    theme: 1,
    title: 'Friday',
    Squat: 'Squat',
    Overhead: 'Overhead press',
    Deadlift: 'Deadlift',
  },
];

const Item = ({title, Squat, Overhead, Deadlift}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text>{Squat}</Text>
    <Text>{Overhead}</Text>
    <Text>{Deadlift}</Text>
  </View>
);
const Item2 = ({title, Squat, Bench, Barbell}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text>{Squat}</Text>
    <Text>{Bench}</Text>
    <Text>{Barbell}</Text>
  </View>
);

const FlatListTraningB = () => {
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      Squat={item.Squat}
      Overhead={item.Overhead}
      Deadlift={item.Deadlift}
    />
  );
  const renderItem2 = ({item}) => (
    <Item2
      title={item.title}
      Squat={item.Squat}
      Bench={item.Bench}
      Barbell={item.Barbell}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text>Traning B</Text>
      <FlatList
        horizontal
        data={DATA}
        renderItem={({item}) => {
          if (item.theme === 1) {
            return renderItem({item});
          }
          return renderItem2({item});
        }}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 18,
    marginVertical: 2,
    marginHorizontal: 2,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
  },
});

export default FlatListTraningB;
