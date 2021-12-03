import {
  TraningActionTypes,
  HOW_MANY_WEEKS_TRANING,
  IS_FIRST_WEEK,
  ADD_NEW_WORKOUT_A,
  ADD_NEW_WORKBOUT_B,
  IS_WORKOUT_A_DONE,
  WORKOUT_A_DONE,
  EDIT_SQUAT,
} from './types';

export const AddHowManyWeeksData = (
  howManyWeeks: number,
): TraningActionTypes => {
  return {
    type: HOW_MANY_WEEKS_TRANING,
    payload: howManyWeeks,
  };
};

export const isFirstWeek = () => {
  return {
    type: IS_FIRST_WEEK,
    payload: false,
  };
};
export const isWorkoutADone = () => {
  return {
    type: IS_WORKOUT_A_DONE,
    payload: false,
  };
};
export const WorkoutAdone = () => {
  return {
    type: WORKOUT_A_DONE,
    payload: true,
  };
};
export const AddNewWorkoutA = (
  squat: number,
  bench: number,
  barbellrow: number,
  overhead: number,
  deadlift: number,
): TraningActionTypes => {
  return {
    type: ADD_NEW_WORKOUT_A,
    payload: {squat, bench, barbellrow, overhead, deadlift},
  };
};

export const AddNewWorkoutB = (
  squat: number,
  bench: number,
  barbellrow: number,
  overhead: number,
  deadlift: number,
): TraningActionTypes => {
  return {
    type: ADD_NEW_WORKBOUT_B,
    payload: {squat, bench, barbellrow, overhead, deadlift},
  };
};

export const EditSquat = (squat: number): TraningActionTypes => {
  return {
    type: EDIT_SQUAT,
    payload: squat,
  };
};
