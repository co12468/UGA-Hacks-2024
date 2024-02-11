import React from 'react';
import {ScrollView, Text, Image, TouchableHighlight, Linking} from 'react-native';

const ReportScreen = ({navigation}) => {
  return (
    <ScrollView>
      <TouchableHighlight
        onPress={() => navigation.navigate(' ')}>
        <Image
          source={
            require('./images/missing.png')
          }
          style={{maxWidth: 420, maxHeight: 1400, height: 1400}}
          resizeMode="stretch"
        />
      </TouchableHighlight>
    </ScrollView>
  );
};

export default ReportScreen;