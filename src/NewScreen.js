import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const NewScreen = () => {
    return (
        <ScrollView>
          <Image
            source={
              require('./images/missing2.png')
            }
            //style={{maxWidth: 500}}
            resizeMode="stretch"
          />
        </ScrollView>
    );
};

export default NewScreen;