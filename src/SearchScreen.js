import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const SearchScreen = () => {
    return (
        <ScrollView>
          <Image
            source={
              require('./images/help.png')
            }
            resizeMode="stretch"
          />
        </ScrollView>
    );
};

export default SearchScreen;