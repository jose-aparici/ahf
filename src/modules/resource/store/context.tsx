import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  useReducer,
} from 'react';

import { Action } from 'domain/app/app.types';

import { reducer, State } from './reducer';

interface Props {
  resourceState: State;
  dispatch: Dispatch<Action>;
}

export const initialState: State = {
  folder: {
    id: '',
    label: [],
    deviceId: '',
    isMainFolder: false,
    children: [],
    params: [],
  },
  currentParamIndex: undefined,
};

export const AhfResourceContext = createContext<Props>({
  resourceState: initialState,
  dispatch: () => true,
});

interface ProviderProps {
  children: ReactNode;
}

export const AhfResourceProvider = ({
  children,
}: ProviderProps): ReactElement => {
  const [resourceState, dispatch] = useReducer(reducer, initialState, () => {
    return { ...initialState };
  });
  return (
    <AhfResourceContext.Provider value={{ resourceState, dispatch }}>
      {children}
    </AhfResourceContext.Provider>
  );
};
