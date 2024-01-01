import {Dimensions, Platform} from 'react-native';

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

export {useDip};
