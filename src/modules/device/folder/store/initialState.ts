import { Param } from 'domain/param/param.types';

export interface State {
  params: Param[];
}
export const initialState: State = {
  params: [],
};
