//types
export const HOW_MANY_WEEKS_TRANING = 'HOW_MANY_WEEKS_TRANING';

export const IS_FIRST_WEEK = 'IS_FIRST_WEEK';
export const ADD_NEW_WORKOUT_A = 'ADD_NEW_WORKOUT_A';
export const ADD_NEW_WORKBOUT_B = 'ADD_NEW_WORKBOUT_B';
export const IS_WORKOUT_A_DONE = 'IS_WORKOUT_A_DONE';
export const WORKOUT_A_DONE = 'WORKOUT_A_DONE';

export interface TraningState {
  howManyWeeks: number;
  isFirstWeek: boolean;
  isWorkoutADone: boolean;
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
interface AddNewWorkoutBAction {
  type: typeof ADD_NEW_WORKBOUT_B;
  payload: any;
}
interface isWorkoutADoneAction {
  type: typeof IS_WORKOUT_A_DONE;
  payload: boolean;
}
interface WorkoutADoneAction {
  type: typeof WORKOUT_A_DONE;
  payload: boolean;
}
export type TraningActionTypes =
  | AddHowManyWeeksAction
  | isFirstWeekAction
  | AddNewWorkoutAction
  | AddNewWorkoutBAction
  | isWorkoutADoneAction
  | WorkoutADoneAction;
