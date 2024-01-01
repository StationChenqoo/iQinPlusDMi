import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/PageStacks';

import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'StagePage'>;
}

const StagePage: React.FC<MyProps> = props => {
  const {route, navigation} = props;
  const [tab, setTab] = useState(0);
  const tabs = ['近1月', '近3月', '近半年', '近1年'];

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    return function () {};
  }, []);

  const renderItem = ({item, index}) => {
    return null;
  };
  
  return (
    <View style={{flex: 1, backgroundColor: '#f8f8f8'}}>
      <View style={{height: useSafeAreaInsets().top}} />
      <View style={{paddingHorizontal: 32}}>
        <SegmentedControl
          selectedIndex={tab}
          values={tabs}
          onValueChange={value => setTab(tabs.findIndex(it => it == value))}
        />
        <FlatList
          data={datas}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${index}`}
        />
      </View>
    </View>
  );
};

export default StagePage;
