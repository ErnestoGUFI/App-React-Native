import { View, Text, StyleSheet } from 'react-native';

export default function TodoHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis tareas</Text>
      <Text style={styles.subtitle}>Organiza tu día</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#475569',
  },
});


