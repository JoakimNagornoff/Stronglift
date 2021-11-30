export const HOW_MANY_WEEKS_TRANING = 'HOW_MANY_WEEKS_TRANING';

export const ADD_NEW_TRANING_A = 'ADD_NEW_TRANING_A';
export const ADD_NEW_TRANING_B = 'ADD_NEW_TRANING_B';

export interface TraningState {
  howManyWeeks: number;
  squat: number;
  overhead: 20;
  deadlift: 20;
  bench: 20;
  barbellrow: 20;
}

interface AddHowManyWeeksAction {
  type: typeof HOW_MANY_WEEKS_TRANING;
  payload: number;
}
interface AddTraningDayAction {
  type: typeof ADD_NEW_TRANING_A;
  payload: any;
}
interface AddTraningDayBActon {
  type: typeof ADD_NEW_TRANING_B;
  payload: any;
}

export type TraningActionTypes =
  | AddHowManyWeeksAction
  | AddTraningDayAction
  | AddTraningDayBActon;
