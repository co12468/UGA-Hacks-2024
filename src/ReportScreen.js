import React from 'react';
import {View, Text, Image} from 'react-native';

const ReportScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={
          require('./images/reports.png')
        }
        style={{maxWidth: 380, maxHeight: 200, marginBottom: 20}}
        resizeMode="stretch"
      />
      <Image
            source={
              require('./images/resources.png')
            }
            style={{maxWidth: 380, maxHeight: 200}}
            resizeMode="stretch"
          />
    </View>
  );
};

export default ReportScreen;