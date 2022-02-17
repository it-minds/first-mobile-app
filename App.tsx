import { StatusBar } from 'expo-status-bar';
import {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Battery from 'expo-battery';


export default function App() {
  const [battery, setBattery] = useState<number>(0);

  useEffect(() => {
    Battery.getBatteryLevelAsync().then(b => setBattery(b));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Battery {(battery * 100).toFixed(0)}%</Text>
      <StatusBar style="auto" backgroundColor={"black"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
