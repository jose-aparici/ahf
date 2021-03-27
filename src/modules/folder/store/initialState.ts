import { Folder } from 'domain/folder/folder.types';

export interface State {
  //name: string;
  //params: Param[];
  folder: Folder;
}
export const initialState: State = {
  folder: {
    id: '',
    label: '',
    children: [],
    params: [],
  },
};
