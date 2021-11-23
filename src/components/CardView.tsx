import React from 'react';
import {
  Dimensions,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Platform,
  FlatList,
} from 'react-native';
import FlatlistTraningA from './FlatlistTraningA';
import FlatListTraningB from './FlatListTraningB';
const CARD_WIDTH = Dimensions.get('window').width * 0.8;
const CARD_HEIGHT = Dimensions.get('window').height * 0.7;
const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1;

type CardType = {
  name: string;
  id: number;
};
const cards = [
  {name: 'Card 1', id: 1},
  {name: 'Card 2', id: 2},
  {name: 'Card 3', id: 1},
  {name: 'Card 4', id: 2},
];

const CardView = () => {
  const _renderView = (views: CardType[]) => {
    return views.map(card => {
      return (
        <View style={styles.cardStyle}>
          {card.id === 1 && (
            <>
              <Text>{card.name}</Text>
              <View style={styles.flatlistA}>
                <FlatlistTraningA />
              </View>
              <View style={styles.FlatListB}>
                <FlatListTraningB />
              </View>
            </>
          )}
          {card.id === 2 && (
            <>
              <Text>{card.name}</Text>
              <View style={styles.flatlistA}>
                <FlatListTraningB />
              </View>
              <View style={styles.FlatListB}>
                <FlatlistTraningA />
              </View>
            </>
          )}
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        snapToInterval={CARD_WIDTH + 10}
        snapToAlignment="center"
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
        }}>
        {_renderView(cards)}
      </ScrollView>
    </SafeAreaView>
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

    backgroundColor: 'gray',
    margin: 5,
    borderRadius: 15,
  },
  flatlistA: {
    flex: 0.5,

    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  FlatListB: {
    flex: 0.5,

    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  middleView: {
    flex: 0.6,
    backgroundColor: 'yellow',
  },
});

export default CardView;
