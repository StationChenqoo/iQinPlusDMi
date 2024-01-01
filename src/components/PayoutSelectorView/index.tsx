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
  item: PayoutReason;
  onItemPress: (item: PayoutReason) => void;
}

const PayoutSelectorView: React.FC<MyProps> = props => {
  const {item, onItemPress} = props;
  const {theme} = useStore();

  return (
    <View style={styles.views}>
      {[...PayoutReasons, Object.create(null)].map((it, index) => {
        return it?.id ? (
          <TouchableOpacity
            key={index}
            activeOpacity={0.88}
            onPress={() => {
              onItemPress(it);
            }}>
            <View
              style={[
                styles.viewItem,
                {borderColor: item?.id == it.id ? theme : 'transparent'},
              ]}>
              <Image
                source={it.icon}
                style={{
                  height: useDip(28),
                  width: useDip(28),
                  tintColor: item?.id == it.id ? theme : '#999',
                }}
              />
              <View style={{height: 5}} />
              <Text
                style={[
                  styles.textItem,
                  {color: item?.id == it.id ? theme : '#666'},
                ]}>
                {it.name}
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.viewItem} key={index} />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  views: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  viewItem: {
    // paddingHorizontal: 4,
    // borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: useDip(56),
    // marginHorizontal: 5,
    marginVertical: 6,
  },
  textItem: {
    fontSize: 12,
  },
});

export default PayoutSelectorView;
