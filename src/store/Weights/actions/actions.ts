import {
  TraningActionTypes,
  HOW_MANY_WEEKS_TRANING,
  ADD_NEW_TRANING_A,
} from './types';

export const AddHowManyWeeksData = (
  howManyWeeks: number,
): TraningActionTypes => {
  return {
    type: HOW_MANY_WEEKS_TRANING,
    payload: howManyWeeks,
  };
};

export const AddTraningDayA = (squat: number): TraningActionTypes => {
  return {
    type: ADD_NEW_TRANING_A,
    payload: squat,
  };
};
