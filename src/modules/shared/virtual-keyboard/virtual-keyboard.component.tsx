import 'react-simple-keyboard/build/css/index.css';

import React, { MutableRefObject, useEffect, useState } from 'react';
import Keyboard from 'react-simple-keyboard';

import { LAYOUTS } from 'domain/virtual-keyboard/virtual-keyboard.constants';
import { Layout } from 'domain/virtual-keyboard/virtual-keyboard.types';

interface Props {
  onChange: (input: string) => void;
  onEnter: () => void;
  keyboardRef: MutableRefObject<Keyboard>;
  layout?: Layout;
  input: string;
}

export const AhfVirtualKeyboardComponent: React.FC<Props> = ({
  onChange,
  onEnter,
  keyboardRef,
  layout = LAYOUTS['ENGLISH'],
  input,
}: Props) => {
  const [layoutName, setLayoutName] = useState('default');

  useEffect(() => {
    keyboardRef?.current?.setInput(input);
  }, [input, keyboardRef]);

  const onKeyPress = (button: string) => {
    if (button === '{shift}' || button === '{lock}') {
      setLayoutName(layoutName === 'default' ? 'shift' : 'default');
    }

    if (button === '{enter}') {
      onEnter();
    }
  };

  return (
    <Keyboard
      keyboardRef={(r) => (keyboardRef.current = r)}
      layoutName={layoutName}
      onChange={onChange}
      onKeyPress={onKeyPress}
      layout={layout}
    />
  );
};
