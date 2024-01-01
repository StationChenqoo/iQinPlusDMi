import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/PageStacks';
import {Button, NavigationBar, PayoutSelectorView} from '@src/components';

import {Bill} from '@src/constants/Types';
import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DateSelector, NumberEditor, RemarkEditor} from './components';
import 'react-native-get-random-values';
import {nanoid} from 'nanoid';
import {isEmpty, useToast} from '@src/constants/xUtils';
import Toast from 'react-native-toast-message';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'StagePage'>;
}

const EditBill: React.FC<MyProps> = props => {
  const {route, navigation} = props;
  const [bill, setBill] = useState<Bill>({
    ammount: '',
    createTime: '',
    customer: '',
    distance: '',
    id: '',
    payTime: '',
    reason: 'REFUEL',
    remark: '',
    attachment: [],
  });

  useEffect(() => {
    return function () {};
  }, []);

  /**
   * 合并 bill
   * @param key
   * @param value
   */
  const mergeBill = (key: keyof Bill, value: any) => {
    let _bill = {...bill};
    _bill[key] = value;
    setBill(_bill);
  };

  const onSubmitPress = () => {
    useToast('呵呵')
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white', position: 'relative'}}>
      <NavigationBar
        onBackPress={() => {
          navigation.goBack();
        }}
        title={'记一笔'}
      />
      <ScrollView>
        <View style={styles.viewCard}>
          <PayoutSelectorView
            id={bill.reason}
            onItemPress={item => {
              mergeBill('reason', item.id);
            }}
          />
        </View>
        <View style={{height: 16}} />
        <DateSelector
          date={bill.payTime}
          onMorePress={() => {}}
          onPress={date => {
            mergeBill('payTime', date);
          }}
        />
        <View style={{height: 16}} />
        <NumberEditor
          title={'花销'}
          value={bill.ammount}
          placeholder={'请输入金额'}
          onChange={amount => {
            mergeBill('ammount', amount);
          }}
        />
        <View style={{height: 16}} />
        <NumberEditor
          title={'里程'}
          value={bill.distance}
          placeholder={'请输入表显公里数'}
          onChange={amount => {
            mergeBill('distance', amount);
          }}
        />
        <View style={{height: 16}} />
        <RemarkEditor
          remark={bill.remark}
          onChange={remark => {
            mergeBill('remark', remark);
          }}
        />
        <View style={{height: 32}} />
        <Button
          style={{marginHorizontal: 15}}
          title={'完成编辑'}
          onPress={onSubmitPress}
        />
      </ScrollView>
      <View
        style={{
          height: useSafeAreaInsets().bottom + 10,
          backgroundColor: 'white',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewCard: {
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  textTitle: {
    fontSize: 16,
    color: '#333',
  },
  viewGroupTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});

export default EditBill;
