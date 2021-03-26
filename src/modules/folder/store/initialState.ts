import { FolderParamsAhf } from 'domain/ahf-folder/ahf-folder.types';

export interface State {
  name: string;
  params: FolderParamsAhf;
}
export const initialState: State = {
  name: '',
  params: {
    ParData: [],
  },
};
