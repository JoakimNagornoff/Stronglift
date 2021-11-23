import {combineReducers} from 'redux';

export interface ApplicationState {}

const rootReducer = combineReducers({});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
