import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import HomeScreen from './screens/HomeScreen';
import WorkoutA from './screens/WorkoutA';
import WorkoutB from './screens/WorkoutB';
import EditScreen from './screens/EditScreen';
import rootReducer from './store/index';
import EditButton from './components/buttons/EditButton';

const Stack = createNativeStackNavigator();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  console.log('store state:');
  console.log(JSON.stringify(store.getState()));
});

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator
            screenOptions={{
              gestureEnabled: true,
            }}
            initialRouteName="WorkoutA">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="WorkoutA"
              component={WorkoutA}
              options={{headerRight: () => <EditButton />}}
            />
            <Stack.Screen
              name="WorkoutB"
              component={WorkoutB}
              options={{
                headerRight: () => <EditButton />,
                headerBackVisible: false,
              }}
            />
            <Stack.Screen name="EditScreen" component={EditScreen} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
