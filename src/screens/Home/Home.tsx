import React from 'react';
import {View, Text} from 'react-native';
import {AsyncStorage} from '@managers';

const Home = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen fdg {Config.API_KEY}</Text>
    </View>
  );
};

export default Home;
