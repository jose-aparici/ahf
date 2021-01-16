import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  useReducer,
} from 'react';

import { Param } from 'domain/param/param.types';

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
  params: Param[];
  children: ReactNode;
}

export const AhfFolderProvider = ({
  params,
  children,
}: ProviderProps): ReactElement => {
  debugger;
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    return { params };
  });
  return (
    <AhfFolderContext.Provider value={{ state, dispatch }}>
      {children}
    </AhfFolderContext.Provider>
  );
};
