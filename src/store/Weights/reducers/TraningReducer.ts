import {
  TraningState,
  HOW_MANY_WEEKS_TRANING,
  TraningActionTypes,
} from '../actions/types';

const initialState: TraningState = {
  howManyWeeks: 0,
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
    default:
      return state;
  }
};

export default TraningReducer;
