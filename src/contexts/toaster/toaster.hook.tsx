import { Dispatch, SetStateAction, useState } from 'react';

interface ToasterHook {
  showToaster: boolean;
  setShowToaster: Dispatch<SetStateAction<boolean>>;
  severity: string;
  setSeverity: Dispatch<SetStateAction<string>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}

export const useToaster = (): ToasterHook => {
  const [showToaster, setShowToaster] = useState(false);
  const [severity, setSeverity] = useState('');
  const [message, setMessage] = useState('');

  return {
    showToaster,
    setShowToaster,
    severity,
    setSeverity,
    message,
    setMessage,
  };
};
