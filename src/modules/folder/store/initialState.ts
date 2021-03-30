import { Folder } from 'domain/folder/folder.types';

export interface State {
  folder: Folder;
}
export const initialState: State = {
  folder: {
    id: '',
    label: '',
    deviceId: '',
    isMainFolder: false,
    children: [],
    params: [],
  },
};
