import {useStore} from '@root/useStore';

import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface MyProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<MyProps> = props => {
  const {title, onPress, style} = props;
  const {theme} = useStore();

  return (
    <TouchableOpacity
      activeOpacity={0.88}
      onPress={onPress}
      style={[styles.view, {backgroundColor: theme}, style]}>
      <Text style={{fontSize: 14, color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    height: 44,
  },
});

export default Button;
