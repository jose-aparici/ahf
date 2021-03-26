import { AhfFolderParams } from 'domain/ahf-folder/ahf-folder.types';

export interface State {
  name: string;
  params: AhfFolderParams;
}
export const initialState: State = {
  name: '',
  params: {
    ParData: [],
  },
};
