import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/PageStacks';

import React from 'react';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'StagePage'>;
}

const StagePage: React.FC<MyProps> = props => {
  const {route, navigation} = props;
  return null;
};

export default StagePage;
