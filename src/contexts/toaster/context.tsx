import React, { createContext, ReactElement, ReactNode } from 'react';

import { Notification } from 'domain/notification/notification.types';

import { AhfSnackBarComponent } from './snackbar/snackbar.component';
import { useToaster } from './toaster.hook';

interface Props {
  showNotification: (notification: Notification) => void;
}
export const AhfToasterContext = createContext<Props>({
  showNotification: () => 0,
});

interface ProviderProps {
  children: ReactNode;
}

export const AhfToasterProvider = ({
  children,
}: ProviderProps): ReactElement => {
  const {
    showNotification,
    showToaster,
    setShowToaster,
    currentNotification,
  } = useToaster();

  return (
    <AhfToasterContext.Provider
      value={{
        showNotification,
      }}
    >
      {currentNotification && (
        <AhfSnackBarComponent
          show={showToaster}
          onShow={setShowToaster}
          notification={currentNotification}
        />
      )}
      {children}
    </AhfToasterContext.Provider>
  );
};
