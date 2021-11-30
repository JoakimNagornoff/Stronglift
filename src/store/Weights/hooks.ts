import {TypedUseSelectorHook, useSelector} from 'react-redux';
import type {RootState} from '../index';
//selector hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
