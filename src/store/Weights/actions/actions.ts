import {
  TraningActionTypes,
  HOW_MANY_WEEKS_TRANING,
  IS_FIRST_WEEK,
  ADD_NEW_WORKOUT_A,
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
