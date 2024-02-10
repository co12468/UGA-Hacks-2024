import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View 
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1, backgroundColor: 'darkorange'}} />
      <Text style={{flex: 5, backgroundColor: 'lightblue'}}>Howdy</Text>
      <View style={{flex: 1, backgroundColor: 'blue'}} />
      <Text style={styles.bigBlue}>Open up App.js to start working on your app!</Text>
      <Text>Hello World!</Text>
      <Text style={styles.red}>This is our app.</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'green',
    //padding: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
