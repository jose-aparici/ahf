import 'react-simple-keyboard/build/css/index.css';

import React, { MutableRefObject, useState } from 'react';
import Keyboard from 'react-simple-keyboard';

import { LAYOUTS } from 'domain/virtual-keyboard/virtual-keyboard.constants';
import { Layout } from 'domain/virtual-keyboard/virtual-keyboard.types';

interface Props {
  onChange: (input: string) => void;
  keyboardRef: MutableRefObject<Keyboard | undefined>;
  layout?: Layout;
}

export const AhfVirtualKeyboardComponent: React.FC<Props> = ({
  onChange,
  keyboardRef,
  layout = LAYOUTS['ENGLISH'],
}: Props) => {
  const [layoutName, setLayoutName] = useState('default');

  const onKeyPress = (button: string) => {
    if (button === '{shift}' || button === '{lock}') {
      setLayoutName(layoutName === 'default' ? 'shift' : 'default');
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
