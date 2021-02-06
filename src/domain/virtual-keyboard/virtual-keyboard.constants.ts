import { Layout } from './virtual-keyboard.types';

export enum LAYOUT_TYPE {
  NUMERIC = 'NUMERIC',
  CHINESE = 'CHINESE',
  GERMAN = 'GERMAN',
  FRENCH = 'FRENCH',
  ENGLISH = 'ENGLISH',
}

export const LAYOUTS: Record<LAYOUT_TYPE, Layout> = {
  NUMERIC: {
    default: ['1 2 3', '4 5 6', '7 8 9', '{shift} 0 _', '{bksp}'],
    shift: ['! / #', '$ % ^', '& * (', '{shift} ) +', '{bksp}'],
  },
  CHINESE: {
    default: [
      '€ ㄅ ㄉ ˇ ˋ ㄓ ˊ ˙ ㄚ ㄞ ㄢ ㄦ = {bksp}',
      '{tab} ㄆ ㄊ ㄍ ㄐ ㄔ ㄗ ㄧ ㄛ ㄟ ㄣ [ ] \\',
      "{lock} ㄇ ㄋ ㄎ ㄑ ㄕ ㄘ ㄨ ㄜ ㄠ ㄤ ' {enter}",
      '{shift} ㄈ ㄌ ㄏ ㄒ ㄖ ㄙ ㄩ ㄝ ㄡ ㄥ',
      '.com @ {space}',
    ],
    shift: [
      '~ ! @ # $ % ^ & * ) ( _ + {bksp}',
      '{tab} q w e r t y u i o p { } |',
      '{lock} a s d f g h j k l : " {enter}',
      '{shift} z x c v b n m , < > ? {shift}',
      '.com @ {space}',
    ],
  },
  GERMAN: {
    default: [
      '^ 1 2 3 4 5 6 7 8 9 0 ß ´ {bksp}',
      '{tab} q w e r t z u i o p ü +',
      '{lock} a s d f g h j k l ö ä # {enter}',
      '{shift} < y x c v b n m , . - {shift}',
      '.com @ {space}',
    ],
    shift: [
      '° ! " § $ % & / ( ) = ? ` {bksp}',
      '{tab} Q W E R T Z U I O P Ü *',
      "{lock} A S D F G H J K L Ö Ä ' {enter}",
      '{shift} > Y X C V B N M ; : _ {shift}',
      '.com @ {space}',
    ],
  },
  FRENCH: {
    default: [
      '² & é " \' ( - è _ ç à ) = {bksp}',
      '{tab} a z e r t y u i o p ^ $',
      '{lock} q s d f g h j k l m ù * {enter}',
      '{shift} < w x c v b n , ; : ! {shift}',
      '.com @ {space}',
    ],
    shift: [
      '{//} 1 2 3 4 5 6 7 8 9 0 ° + {bksp}',
      '{tab} A Z E R T Y U I O P ¨ £',
      '{lock} Q S D F G H J K L M % µ {enter}',
      '{shift} > W X C V B N ? . / § {shift}',
      '.com @ {space}',
    ],
  },
  ENGLISH: {
    default: [
      '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
      '{tab} q w e r t y u i o p [ ] \\',
      "{lock} a s d f g h j k l ; ' {enter}",
      '{shift} z x c v b n m , . / {shift}',
      '.com @ {space}',
    ],
    shift: [
      '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
      '{tab} Q W E R T Y U I O P { } |',
      '{lock} A S D F G H J K L : " {enter}',
      '{shift} Z X C V B N M < > ? {shift}',
      '.com @ {space}',
    ],
  },
};
