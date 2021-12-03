import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {EditSquat} from '../store/Weights/actions/actions';

const EditScreen = () => {
  const dispatch = useDispatch();
  const [squat, setSquat] = useState(0);

  const squatAction = () => {
    dispatch(EditSquat(squat));
  };
  return (
    <View style={styles.container}>
      <Text>EditScreen</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="squat"
          keyboardType="numeric"
          onChangeText={text => setSquat(text)}
        />
      </View>
      <TouchableOpacity onPress={() => squatAction()}>
        <Text>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    marginTop: 20,
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161F3D',
  },
});

export default EditScreen;
