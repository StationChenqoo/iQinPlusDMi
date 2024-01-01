import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface MyProps {
  remark: string;
  onChange: (remark: string) => void;
}

const RemarkEditor: React.FC<MyProps> = props => {
  const {remark, onChange} = props;

  return (
    <View style={styles.view}>
      <TextInput
        placeholder={'请输入备注信息（选填）'}
        style={styles.textInput}
        value={remark}
        onChangeText={onChange}
        // numberOfLines={3}
        multiline={true}
        underlineColorAndroid={'transparent'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    // alignItems: '',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  textInput: {
    fontSize: 16,
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#eee',
    textAlignVertical: 'top',
    height: 99,
  },
});

export default RemarkEditor;
