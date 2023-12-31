import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, devtools, persist} from 'zustand/middleware';

interface States {
  bears: number;
  increase: (by: number) => void;
}

const useStore = create<States>()(
  devtools(
    persist(
      set => ({
        bears: 0,
        increase: by => set(state => ({bears: state.bears + by})),
      }),
      {
        storage: createJSONStorage(() => AsyncStorage),
        name: 'useStore.ts',
        /** 白名单 */
        partialize: state => ({
          bears: state.bears,
        }),
      },
    ),
  ),
);

export {useStore};
