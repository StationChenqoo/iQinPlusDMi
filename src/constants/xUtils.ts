import {Dimensions, NativeAppEventEmitter, Platform} from 'react-native';

/**
 * 屏幕适配暂时的方案
 * - `iOS`: `pt`
 * - `Android`: `dip`
 * @param px
 * @returns
 */
const useDip = (px: number) =>
  Platform.select({
    android: px,
    ios: Math.round((px * Dimensions.get('screen').width) / 375),
  });

/**
 * 替换完所有非空字符以后，仍然为空
 * @param s
 */
const isEmpty = (s: string | number) => {
  const replacedString = s.toString().replace(/\S/g, s.toString());
  return replacedString.trim() === '';
};

const useToast = (s: string) => {
  NativeAppEventEmitter.emit('useToast', s);
};

export {useDip, isEmpty, useToast};
