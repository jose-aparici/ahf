import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  useReducer,
} from 'react';

import { Folder } from 'domain/folder/folder.types';

import { Action } from './actions';
import { initialState, State } from './initialState';
import { reducer } from './reducer';

interface Props {
  folderState: State;
  dispatch: Dispatch<Action>;
}
export const AhfFolderContext = createContext<Props>({
  folderState: initialState,
  dispatch: () => true,
});

interface ProviderProps {
  folder: Folder;
  children: ReactNode;
}

export const AhfFolderProvider = ({
  folder,
  children,
}: ProviderProps): ReactElement => {
  const [folderState, dispatch] = useReducer(reducer, initialState, () => {
    return { ...initialState, folder };
  });
  return (
    <AhfFolderContext.Provider value={{ folderState, dispatch }}>
      {children}
    </AhfFolderContext.Provider>
  );
};
