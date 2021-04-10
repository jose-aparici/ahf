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
export const AhfResourceContext = createContext<Props>({
  state: initialState,
  dispatch: () => true,
});

interface ProviderProps {
  children: ReactNode;
}

export const AhfResourceProvider = ({
  children,
}: ProviderProps): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    return { ...initialState };
  });
  return (
    <AhfResourceContext.Provider value={{ state, dispatch }}>
      {children}
    </AhfResourceContext.Provider>
  );
};
