import { atom } from 'recoil';
import { localStorageEffect } from './utilFun';

export const darkModeAtom = atom({
  key: 'dark_mode',
  default: false,
  effects: [localStorageEffect('dark_mode')],
});
