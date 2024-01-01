/**
 * @format
 */

import {AppRegistry, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStore} from 'zustand';
import {useStore} from './useStore';
import {createContext} from 'react';
import Stacks from './PageStacks';

const StoreContext = createContext();

const iQinPlusDMi = () => {
  return (
    <StoreContext.Provider value={useStore}>
      <View style={{flex: 1}}>
        <Stacks />
      </View>
    </StoreContext.Provider>
  );
};

AppRegistry.registerComponent(appName, () => iQinPlusDMi);
