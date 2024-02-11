import React from 'react';
import {ScrollView, Text, Image, TouchableHighlight, LinkingIOS} from 'react-native';

const ReportScreen = () => {
  return (
    <ScrollView>
      <TouchableHighlight 
        onPress={() => LinkingIOS.openURL('https://www.missingkids.org/poster/NCMC/601906/1')}>
        <Image
          source={
            require('./images/mk1.jpg')
          }
          style={{maxWidth: 200, maxHeight: 240, margin: 20, marginLeft: 98, height: 240}}
          resizeMode="stretch"
        />
      </TouchableHighlight>
      <Image
        source={
          require('./images/missing.png')
        }
        style={{maxWidth: 420, maxHeight: 1400}}
        resizeMode="stretch"
      />
    </ScrollView>
  );
};

export default ReportScreen;