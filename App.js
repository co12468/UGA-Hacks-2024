import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import HomeScreen from './src/HomeScreen';
import ReportScreen from './src/ReportScreen';
import SearchScreen from './src/SearchScreen';
import ServiceScreen from './src/ServiceScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: 0,
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 15,
      backgroundColor: 'rgba(100, 100, 200, 0.8)',
    }}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarLabel: route.name,
            tabBarButton: (props) => (
              <CustomTabBarButton {...props}>
                <Text style={{fontSize: 18, color: 'black'}}>{route.name}</Text>
              </CustomTabBarButton>
            ),
            tabBarStyle: {backgroundColor: '#c0c0f9'},
          })}
        >
          <Tab.Screen name="Select Location" component={HomeScreen} />
          <Tab.Screen name="Missing Reports" component={ReportScreen} />
          <Tab.Screen name="Local Services" component={ServiceScreen} />
          <Tab.Screen name="City Risk Factor" component={SearchScreen} />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
