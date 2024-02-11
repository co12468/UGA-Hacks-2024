import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const SearchScreen = () => {
    return (
        <ScrollView>
          <Image
            source={
              require('./images/help.png')
            }
            //style={{maxWidth: 500}}
            resizeMode="stretch"
          />
        </ScrollView>
    );
};

export default SearchScreen;