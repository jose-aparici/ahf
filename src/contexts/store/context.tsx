import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  useReducer,
} from 'react';

import { Action } from 'domain/app/app.types';

import { initialState, State } from './initialState';
import { reducer } from './reducer';

interface Props {
  state: State;
  dispatch: Dispatch<Action>;
}
export const AhfContext = createContext<Props>({
  state: initialState,
  dispatch: () => true,
});

interface ProviderProps {
  children: ReactNode;
}

export const AhfProvider = ({ children }: ProviderProps): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AhfContext.Provider value={{ state, dispatch }}>
      {children}
    </AhfContext.Provider>
  );
};
