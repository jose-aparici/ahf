import { useCallback, useState } from 'react';

interface BackdropHook {
  isBackdropOpened: boolean;
  openBackdrop: () => void;
  closeBackdrop: () => void;
}

export const useBackdrop = (): BackdropHook => {
  const [isOpen, setIsOpen] = useState(false);

  const openBackdrop = useCallback(() => setIsOpen(true), []);

  const closeBackdrop = useCallback(() => setIsOpen(false), []);

  return {
    isBackdropOpened: isOpen,
    openBackdrop,
    closeBackdrop,
  };
};
