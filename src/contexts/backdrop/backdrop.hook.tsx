import { useCallback, useState } from 'react';

interface BackdropHook {
  isBackdropOpened: boolean;
  isModal: boolean;
  openBackdrop: () => void;
  closeBackdrop: () => void;
}

export const useBackdrop = (): BackdropHook => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModal, setIsModal] = useState(true);

  const openBackdrop = useCallback((modal = true) => {
    setIsModal(modal);
    setIsOpen(true);
  }, []);

  const closeBackdrop = useCallback(() => setIsOpen(false), []);

  return {
    isModal,
    isBackdropOpened: isOpen,
    openBackdrop,
    closeBackdrop,
  };
};
