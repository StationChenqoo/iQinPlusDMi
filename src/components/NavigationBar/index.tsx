import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/PageStacks';
import {useStore} from '@root/useStore';
import {PayoutReason, PayoutReasons} from '@src/constants/Configs';
import {useDip} from '@src/constants/xUtils';

import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface MyProps {
  title: string;
  onBackPress: () => void;
}

const NavigationBar: React.FC<MyProps> = props => {
  const {title, onBackPress} = props;
  const {theme} = useStore();

  return (
    <View>
      <View
        style={{
          height: useSafeAreaInsets().top,
          backgroundColor: 'white',
        }}
      />
      <View style={styles.view}>
        <TouchableOpacity
          activeOpacity={0.88}
          onPress={onBackPress}
          hitSlop={{bottom: 12, top: 12, left: 12, right: 12}}>
          <Image
            source={require('@src/images/common/back.png')}
            style={{height: 20, width: 20, tintColor: '#666'}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 16, color: '#333'}}>{title}</Text>
        <View style={{height: 20, width: 20}} />
      </View>
      <View style={{height: 1, backgroundColor: '#ddd'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: useDip(44),
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
});

export default NavigationBar;
