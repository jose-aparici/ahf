import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  useReducer,
} from 'react';

import { FolderParams } from 'domain/folder/folder.types';

import { Action } from './actions';
import { initialState, State } from './initialState';
import { reducer } from './reducer';

interface Props {
  state: State;
  dispatch: Dispatch<Action>;
}
export const AhfFolderContext = createContext<Props>({
  state: initialState,
  dispatch: () => true,
});

interface ProviderProps {
  name: string;
  params: FolderParams;
  children: ReactNode;
}

export const AhfFolderProvider = ({
  name,
  params,
  children,
}: ProviderProps): ReactElement => {
  debugger;
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    return { ...initialState, name, params };
  });
  return (
    <AhfFolderContext.Provider value={{ state, dispatch }}>
      {children}
    </AhfFolderContext.Provider>
  );
};
