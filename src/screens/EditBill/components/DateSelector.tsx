import moment from 'moment';

import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface MyProps {
  date: string;
  onMorePress: () => void;
  onPress: (date: string) => void;
}

const DateSelector: React.FC<MyProps> = props => {
  const {date, onMorePress, onPress} = props;

  const onTagPress = (day: number) => {
    let date = moment().add(day, 'days').format('YYYY-MM-DD');
    onPress(date);
  };

  return (
    <View style={styles.view}>
      <Text style={{fontSize: 16, color: '#333'}}>日期</Text>
      <View style={styles.viewTail}>
        <TouchableOpacity
          style={styles.viewTag}
          activeOpacity={0.88}
          onPress={() => {
            onTagPress(-1);
          }}>
          <Text style={styles.textTag}>昨天</Text>
        </TouchableOpacity>
        <View style={{width: 12}} />
        <TouchableOpacity
          style={styles.viewTag}
          activeOpacity={0.88}
          onPress={() => {
            onTagPress(0);
          }}>
          <Text style={styles.textTag}>今天</Text>
        </TouchableOpacity>
        <View style={{width: 16}} />
        <TouchableOpacity
          activeOpacity={0.88}
          style={styles.viewTail}
          onPress={onMorePress}>
          <Text style={{fontSize: 16, color: '#666'}}>{date || '请选择'}</Text>
          <View style={{width: 2}} />
          <Image
            source={require('@src/images/common/more.png')}
            style={{height: 16, width: 16, tintColor: '#666'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  viewTag: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ccc',
  },
  viewTail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTag: {
    fontSize: 14,
    color: '#666',
  },
});
export default DateSelector;
