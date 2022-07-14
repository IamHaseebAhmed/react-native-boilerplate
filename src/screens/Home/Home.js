import * as React from 'react';
import {View, Text} from 'react-native';
import {AsyncStorageHook} from '@hooks/index';

const Home = () => {

  const {set, setString} = AsyncStorageHook();
  setString('sd', true);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;
