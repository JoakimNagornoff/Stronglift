import {
  TraningState,
  HOW_MANY_WEEKS_TRANING,
  TraningActionTypes,
  IS_FIRST_WEEK,
  ADD_NEW_WORKOUT_A,
  ADD_NEW_WORKBOUT_B,
  IS_WORKOUT_A_DONE,
  WORKOUT_A_DONE,
  EDIT_SQUAT,
} from '../actions/types';

const initialState: TraningState = {
  howManyWeeks: 2,
  isFirstWeek: true,
  isWorkoutADone: false,
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
    case IS_FIRST_WEEK: {
      return {
        ...state,
        isFirstWeek: action.payload,
      };
    }
    case IS_WORKOUT_A_DONE: {
      return {
        ...state,
        isWorkoutADone: action.payload,
      };
    }
    case WORKOUT_A_DONE: {
      return {
        ...state,
        isWorkoutADone: action.payload,
      };
    }
    case ADD_NEW_WORKOUT_A: {
      return {
        ...state,
        squat: action.payload.squat,
        bench: action.payload.bench,
        barbellrow: action.payload.barbellrow,
        overhead: action.payload.overhead,
        deadlift: action.payload.deadlift,
      };
    }
    case ADD_NEW_WORKBOUT_B: {
      return {
        ...state,
        squat: action.payload.squat,
        bench: action.payload.bench,
        barbellrow: action.payload.barbellrow,
        overhead: action.payload.overhead,
        deadlift: action.payload.deadlift,
      };
    }
    case EDIT_SQUAT: {
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
