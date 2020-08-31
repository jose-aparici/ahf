import { ADD_DATA } from './types';

export interface AddData {
  type: ADD_DATA;
  payload: Array<any>;
}

export type Action = AddData;
