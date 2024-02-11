import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const HomeScreen = () => {
    const [text, setText] = useState('');
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
            style={{height: 40}}
            placeholder="Type here to search"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
        />
        <Text style={{fontSize: 24, color: 'blue'}}>
            {text
            .split(' ')
            .map(word => word && '🍕')
            .join(' ')}
        </Text>
        </View>
    );
};

export default HomeScreen;
