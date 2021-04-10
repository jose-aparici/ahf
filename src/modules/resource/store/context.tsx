import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  useReducer,
} from 'react';

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
  children: ReactNode;
}

export const AhfFolderProvider = ({
  children,
}: ProviderProps): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    return { ...initialState };
  });
  return (
    <AhfFolderContext.Provider value={{ state, dispatch }}>
      {children}
    </AhfFolderContext.Provider>
  );
};
