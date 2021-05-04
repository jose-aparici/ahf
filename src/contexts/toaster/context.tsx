import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
} from 'react';

import { AhfSnackBarComponent } from './snackbar/snackbar.component';
import { useToaster } from './toaster.hook';

interface Props {
  showToaster: boolean;
  setShowToaster: Dispatch<SetStateAction<boolean>>;
  severity: string;
  setSeverity: Dispatch<SetStateAction<string>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}
export const AhfToasterContext = createContext<Props>({
  showToaster: false,
  setShowToaster: () => true,
  severity: '',
  setSeverity: () => true,
  message: '',
  setMessage: () => true,
});

interface ProviderProps {
  children: ReactNode;
}

export const AhfToasterProvider = ({
  children,
}: ProviderProps): ReactElement => {
  const {
    showToaster,
    setShowToaster,
    severity,
    setSeverity,
    message,
    setMessage,
  } = useToaster();

  return (
    <AhfToasterContext.Provider
      value={{
        showToaster,
        setShowToaster,
        severity,
        setSeverity,
        message,
        setMessage,
      }}
    >
      <AhfSnackBarComponent
        show={showToaster}
        onShow={setShowToaster}
        severity={severity}
        message={message}
      />
      {children}
    </AhfToasterContext.Provider>
  );
};
