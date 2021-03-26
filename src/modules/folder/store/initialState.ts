import { AhfParams } from 'domain/ahf-param/ahf-param.types';

export interface State {
  name: string;
  params: AhfParams;
}
export const initialState: State = {
  name: '',
  params: {
    ParData: [],
  },
};
