import React from 'react';
import {Image, View, Text, ScrollView, StyleSheet} from 'react-native';

const ServiceScreen = () => {
    return (
        <ScrollView>
            <Text style={styles.text}>Fire</Text>
            <Image
                source={
                    require('./images/fire.png')
                }
                style={{maxWidth: 420, maxHeight: 350, marginBottom: 20, height: 350}}
                resizeMode="stretch"
            />
            <Text style={styles.text}>Police</Text>
            <Image
                source={
                    require('./images/police1.png')
                }
                style={{maxWidth: 420, maxHeight: 180, marginBottom: 10, height: 180}}
                resizeMode="stretch"
            />
            <Image
                source={
                    require('./images/police2.png')
                }
                style={{maxWidth: 420, maxHeight: 350, marginBottom: 10, height: 350}}
                resizeMode="stretch"
            />
            <Image
                source={
                    require('./images/police3.png')
                }
                style={{maxWidth: 420, maxHeight: 350, marginBottom: 10, height: 350}}
                resizeMode="stretch"
            />
            <Image
                source={
                    require('./images/police4.png')
                }
                style={{maxWidth: 420, maxHeight: 160, marginBottom: 20, height: 160}}
                resizeMode="stretch"
            />
            <Text style={styles.text}>Hospital</Text>
            <Image
                source={
                    require('./images/hospital1.png')
                }
                style={{maxWidth: 420, maxHeight: 480, marginBottom: 10, height: 480}}
                resizeMode="stretch"
            />
            <Image
                source={
                    require('./images/hospital2.png')
                }
                style={{maxWidth: 420, maxHeight: 400, height: 400}}
                resizeMode="stretch"
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    text: {
      color: 'darkblue',
      fontSize: 20,
      paddingLeft: 3,
    },
  });

export default ServiceScreen;