import { Param } from 'domain/param/param.types';

export interface State {
  name: string;
  params: Param[];
}
export const initialState: State = {
  name: '',
  params: [],
};
