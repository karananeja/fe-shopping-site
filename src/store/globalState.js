import { atom } from 'recoil';
import { localStorageEffect } from './effects';
import { ATOM_KEYS } from '@utils/constants';

export const darkModeAtom = atom({
  key: ATOM_KEYS.DARK_MODE,
  default: false,
  effects: [localStorageEffect(ATOM_KEYS.DARK_MODE)],
});
