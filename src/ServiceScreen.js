import React from 'react';
import {Image, View, Text} from 'react-native';

const ServiceScreen = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={
              require('./images/services.png')
            }
            style={{maxWidth: 380, maxHeight: 200}}
            resizeMode="stretch"
          />
        </View>
    );
};

export default ServiceScreen;