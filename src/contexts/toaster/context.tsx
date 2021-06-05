import React, { createContext, ReactElement, ReactNode } from 'react';

import { Notification } from 'domain/notification/notification.types';

import { AhfSnackBarComponent } from './snackbar/snackbar.component';
import { useToaster } from './toaster.hook';

interface Props {
  displayNotification: (notification: Notification) => void;
}
export const AhfToasterContext = createContext<Props>({
  displayNotification: () => 0,
});

interface ProviderProps {
  children: ReactNode;
}

export const AhfToasterProvider = ({
  children,
}: ProviderProps): ReactElement => {
  const {
    displayNotification,
    notification,
    showNotification,
    setShowNotification,
  } = useToaster();

  return (
    <AhfToasterContext.Provider
      value={{
        displayNotification,
      }}
    >
      <AhfSnackBarComponent
        show={showNotification}
        onShow={setShowNotification}
        notification={notification}
      />

      {children}
    </AhfToasterContext.Provider>
  );
};
