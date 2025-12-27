import { darkModeAtom } from '@store/global-state';
import { KEYS } from '@utils/constants';
import { useRecoilState } from 'recoil';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeAtom);

  !isDarkMode
    ? document.documentElement.setAttribute(KEYS.DATA_MODE, KEYS.LIGHT)
    : document.documentElement.setAttribute(KEYS.DATA_MODE, KEYS.DARK);

  return { isDarkMode, setIsDarkMode };
};
