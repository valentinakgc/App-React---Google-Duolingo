import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet2, Button, TouchableOpacity} from 'react-native';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View> 
        <AssetExample />
        
        <Text style={styles.text}> Learn a lenguage for free. Forever </Text>

        <View style={styles.container2}>
          <TouchableOpacity
          style={styles.button}>
            <Text style={styles.text1}> GET STARTED </Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.button2}>
            <Text style={styles.text2}> I ALREADY HAVE AN ACCOUNT </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffff',
    padding: 8,
    marginTop:200,
  },

  text: {
    fontSize: 15,
    color: '#C2C2C2',
    textAlign: 'center',
  },

  button: {
    padding: 12,
    borderRadius: 15,
    width: '80%',
    alignItems: 'center',
    backgroundColor: `#8ddf01`,
    shadowColor: '#000',
  shadowOffset: {
    width: 2,
    height: 4,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
},

  text1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

   container2: {
    flex: 1,
    alignItems: 'center',
    marginTop:200,
  },

  button2: {
    padding: 12,
    borderRadius: 15,
    width: '80%',
    alignItems: 'center',
    backgroundColor: `#ffff`,
    marginTop:30,
    shadowOffset: {
    width: 1,
    height: 3,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
},
    text2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#8ddf01',
    textAlign: 'center',
  },
});