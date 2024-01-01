import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/PageStacks';
import {Button, NavigationBar, PayoutSelectorView} from '@src/components';
import {PayoutReason} from '@src/constants/Configs';

import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {AmountEditor, DateSelector, RemarkEditor} from './components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'StagePage'>;
}

const EditBill: React.FC<MyProps> = props => {
  const {route, navigation} = props;
  const [payout, setPayout] = useState<PayoutReason>(Object.create(null));
  const [payDate, setPayDate] = useState('');
  const [amount, setAmount] = useState<number | string>('');
  const [remark, setRemark] = useState('');

  useEffect(() => {
    return function () {};
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white', position: 'relative'}}>
      <NavigationBar
        onBackPress={() => {
          navigation.goBack();
        }}
        title={'记一笔'}
      />
      <View style={styles.viewCard}>
        <PayoutSelectorView item={payout} onItemPress={setPayout} />
      </View>
      <View style={{height: 16}} />
      <DateSelector
        date={payDate}
        onMorePress={() => {}}
        onPress={setPayDate}
      />
      <View style={{height: 16}} />
      <AmountEditor amount={amount} onChange={setAmount} />
      <View style={{height: 16}} />
      <RemarkEditor remark={remark} onChange={setRemark} />
      <View style={{flex: 1}} />
      <Button
        style={{marginHorizontal: 15}}
        title={'完成编辑'}
        onPress={() => {}}
      />
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
