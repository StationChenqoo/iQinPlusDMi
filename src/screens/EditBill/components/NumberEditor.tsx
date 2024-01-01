import React from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

interface MyProps {
  title: string;
  value: number | string;
  keyboardType?: KeyboardTypeOptions;
  placeholder: string;
  onChange: (amount: string | number) => void;
}

const NumberEditor: React.FC<MyProps> = props => {
  const {title, value, onChange, placeholder} = props;

  return (
    <View style={styles.view}>
      <Text style={{fontSize: 16, color: '#333'}}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        style={{fontSize: 16, textAlign: 'right'}}
        keyboardType={'numeric'}
        value={value + ''}
        onChangeText={text => {
          const filterAndReturnPositiveInt = (inputString: string) => {
            // 使用正则表达式过滤掉除了0~9以外的任何字符
            const filteredString = inputString.replace(/[^0-9]/g, '');
            // 将过滤后的字符串转换为数字
            const numberValue = parseInt(filteredString, 10);
            return numberValue || '';
          };
          onChange(filterAndReturnPositiveInt(text));
        }}
      />
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
export default NumberEditor;
