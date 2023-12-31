/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStore} from 'zustand';
import {useStore} from './useStore';
import { createContext } from 'react';

const StoreContext = createContext();

const iQinPlusDMi = () => {
  return (
    <StoreContext.Provider value={useStore}>
      <App />
    </StoreContext.Provider>
  );
};

AppRegistry.registerComponent(appName, () => iQinPlusDMi);
