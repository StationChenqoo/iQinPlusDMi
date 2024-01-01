/**
 * @format
 */

import {AppRegistry, NativeAppEventEmitter, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStore} from 'zustand';
import {useStore} from './useStore';
import {createContext, useEffect, useRef} from 'react';
import Stacks from './PageStacks';
import Toast from './src/components/Toast';

const StoreContext = createContext();
const iQinPlusDMi = () => {
  const toast = useRef(null);

  useEffect(() => {
    let toaster = NativeAppEventEmitter.addListener('useToast', data => {
      toast.current.show(data);
    });
    return function () {z
      toaster.remove();
    };
  }, []);

  return (
    <StoreContext.Provider value={useStore}>
      <View style={{flex: 1}}>
        <Stacks />
        <Toast ref={toast} />
      </View>
    </StoreContext.Provider>
  );
};

AppRegistry.registerComponent(appName, () => iQinPlusDMi);
