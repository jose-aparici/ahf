import { FolderParams } from 'domain/folder/folder.types';

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
