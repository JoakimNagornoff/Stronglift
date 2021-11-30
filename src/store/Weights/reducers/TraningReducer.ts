import {
  TraningState,
  HOW_MANY_WEEKS_TRANING,
  TraningActionTypes,
  ADD_NEW_TRANING_A,
} from '../actions/types';

const initialState: TraningState = {
  howManyWeeks: 2,
  squat: 20,
  overhead: 20,
  deadlift: 20,
  bench: 20,
  barbellrow: 20,
};

const TraningReducer = (
  state = initialState,
  action: TraningActionTypes,
): TraningState => {
  switch (action.type) {
    case HOW_MANY_WEEKS_TRANING: {
      return {
        ...state,
        howManyWeeks: action.payload,
      };
    }
    case ADD_NEW_TRANING_A: {
      return {
        ...state,
        squat: action.payload,
      };
    }
    default:
      return state;
  }
};

export default TraningReducer;
