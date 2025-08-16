import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
   <View style={styles.container}>
      <Text style={styles.title}>app react</Text>
      <Button
        title="boton"
        onPress={() => Alert.alert('¡Hola! Este es tu primer botón')}
      />
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
