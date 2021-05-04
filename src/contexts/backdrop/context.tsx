import { AhfSpinnerComponent } from 'contexts/backdrop/spinner/spinner.component';
import React, { createContext, ReactElement, ReactNode } from 'react';

import { useBackdrop } from './backdrop.hook';

interface Props {
  isBackdropOpened: boolean;
  openBackdrop: () => void;
  closeBackdrop: () => void;
}
export const AhfBackdropContext = createContext<Props>({
  isBackdropOpened: false,
  openBackdrop: () => true,
  closeBackdrop: () => true,
});

interface ProviderProps {
  children: ReactNode;
}

export const AhfBackdropProvider = ({
  children,
}: ProviderProps): ReactElement => {
  const { isBackdropOpened, openBackdrop, closeBackdrop } = useBackdrop();

  return (
    <AhfBackdropContext.Provider
      value={{ isBackdropOpened, openBackdrop, closeBackdrop }}
    >
      <AhfSpinnerComponent open={isBackdropOpened} />
      {children}
    </AhfBackdropContext.Provider>
  );
};
