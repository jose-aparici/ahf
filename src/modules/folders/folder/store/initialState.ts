import { FolderParams } from 'domain/ahf-folder/ahf-folder.types';

export interface State {
  name: string;
  params: FolderParams;
}
export const initialState: State = {
  name: '',
  params: {
    ParData: [],
  },
};
