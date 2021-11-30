//types
export const HOW_MANY_WEEKS_TRANING = 'HOW_MANY_WEEKS_TRANING';

export const IS_FIRST_WEEK = 'IS_FIRST_WEEK';
export const ADD_NEW_WORKOUT_A = 'ADD_NEW_WORKOUT_A';

export interface TraningState {
  howManyWeeks: number;
  isFirstWeek: boolean;
  squat: number;
  overhead: number;
  deadlift: number;
  bench: number;
  barbellrow: number;
}

interface AddHowManyWeeksAction {
  type: typeof HOW_MANY_WEEKS_TRANING;
  payload: number;
}
interface isFirstWeekAction {
  type: typeof IS_FIRST_WEEK;
  payload: boolean;
}

interface AddNewWorkoutAction {
  type: typeof ADD_NEW_WORKOUT_A;
  payload: any;
}

export type TraningActionTypes =
  | AddHowManyWeeksAction
  | isFirstWeekAction
  | AddNewWorkoutAction;
