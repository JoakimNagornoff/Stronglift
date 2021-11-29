import {combineReducers} from 'redux';
import {TraningState} from './Weights/actions/types';

import TraningReducer from './Weights/reducers/TraningReducer';
export interface ApplicationState {
  traning: TraningState;
}

const rootReducer = combineReducers({
  traning: TraningReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
