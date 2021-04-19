import React, { ReactNode, RefObject, useEffect } from 'react';
import Keyboard from 'react-simple-keyboard';

interface Props {
  value: string;
  isNumeric?: boolean;
  keyboardRef: RefObject<Keyboard>;
  children: ReactNode;
  onChange: (value: string) => void;
  onEnter: () => void;
}
export const AhfParamEditComponent: React.FC<Props> = ({
  value,
  isNumeric = false,
  keyboardRef,
  children,
  onChange,
  onEnter,
}: Props) => {
  useEffect(() => {
    keyboardRef?.current?.setInput(value);
  }, [value, keyboardRef]);

  return <></>;
};
