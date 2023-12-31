import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {RootStacksProp} from './PageStacks';
import StagePage from './src/screens/StagePage';
import {useStore} from './useStore';

const Tab = createBottomTabNavigator();
interface AppProps {
  navigation: RootStacksProp;
}

const App: React.FC<AppProps> = props => {
  const {theme} = useStore();

  useEffect(() => {
    return function () {};
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShadowVisible: true,
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let icon = {
              Home: require('@src/images/menu/earth.png'),
              Bill: require('@src/images/menu/note.png'),
              My: require('@src/images/menu/talk.png'),
            }[route.name];

            return (
              <Image
                source={icon}
                style={{height: size, width: size, tintColor: color}}
              />
            );
          },
          tabBarActiveTintColor: theme,
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name={'Home'}
          component={StagePage}
          options={{tabBarLabel: '首页'}}
        />
        <Tab.Screen
          name={'Bill'}
          component={StagePage}
          options={{tabBarLabel: '账单'}}
        />
        <Tab.Screen
          name={'My'}
          component={StagePage}
          options={{tabBarLabel: '我的'}}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  viewTabBarStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
});

export default App;
