import {TraningActionTypes, HOW_MANY_WEEKS_TRANING} from './types';

export const AddHowManyWeeksData = (
  howManyWeeks: number,
): TraningActionTypes => {
  return {
    type: HOW_MANY_WEEKS_TRANING,
    payload: howManyWeeks,
  };
};
