import { atom } from 'recoil';
import { localStorageEffect } from './effects';
import { ATOM_KEYS } from '@utils/constants';

export const darkModeAtom = atom({
  key: ATOM_KEYS.DARK_MODE,
  default: false,
  effects: [localStorageEffect(ATOM_KEYS.DARK_MODE)],
});

export const cartItemsAtom = atom({
  key: ATOM_KEYS.CART_ITEMS,
  default: [],
  effects: [localStorageEffect(ATOM_KEYS.CART_ITEMS)],
});

export const searchQueryAtom = atom({
  key: ATOM_KEYS.SEARCH_QUERY,
  default: '',
});
