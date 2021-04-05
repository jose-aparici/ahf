import React, { MutableRefObject } from 'react';
import Keyboard from 'react-simple-keyboard';

import { Param } from 'domain/param/param.types';
import { AhfVirtualKeyboardComponent } from 'modules/shared/virtual-keyboard/virtual-keyboard.component';

interface Props {
  param: Param;
  keyboardRef: MutableRefObject<Keyboard | undefined>;
  onChange: () => void;
}
export const AhfParamEditComponent: React.FC<Props> = ({
  param,
  keyboardRef,
  onChange,
}: Props) => {
  return (
    <>
      <div>{param.name}</div>
      <AhfVirtualKeyboardComponent
        keyboardRef={keyboardRef}
        onChange={onChange}
      />
    </>
  );
};
