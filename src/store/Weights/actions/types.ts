export const HOW_MANY_WEEKS_TRANING = 'HOW_MANY_WEEKS_TRANING';

export interface TraningA {
  traningA: {
    squat: number;
    bench: number;
    barbellrow: number;
  };
}

export interface TraningB {
  traningB: {
    squat: number;
    overhead: number;
    deadlift: number;
  };
}

export interface TraningState {
  howManyWeeks: number;
}

interface AddHowManyWeeksAction {
  type: typeof HOW_MANY_WEEKS_TRANING;
  payload: number;
}

export type TraningActionTypes = AddHowManyWeeksAction;
