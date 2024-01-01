import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import * as React from 'react';
import App from './App';
import StagePage from '@src/screens/StagePage';
import EditBill from '@src/screens/EditBill';

export type RootStacksParams = {
  App: undefined;
  StagePage: undefined;
  EditBill: {id?: string};
};

const RootStack = createNativeStackNavigator<RootStacksParams>();

export type RootStacksProp = NativeStackNavigationProp<RootStacksParams>;

export default function Stacks() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{animation: 'slide_from_right', headerShown: false}}>
        <RootStack.Screen name="App" component={App} />
        <RootStack.Screen name="EditBill" component={EditBill} />
        <RootStack.Screen name="StagePage" component={StagePage} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
