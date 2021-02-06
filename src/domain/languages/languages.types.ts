import { LAYOUT_TYPE } from 'domain/virtual-keyboard/virtual-keyboard.constants';

export type AhfLanguage = {
  locale: string;
  name: string;
  position: number;
  keyboard: LAYOUT_TYPE;
};
