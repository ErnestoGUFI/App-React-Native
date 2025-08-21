import { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native';

export default function TodoInput({ onSubmit }) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onSubmit?.(trimmed);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Agregar nueva tarea..."
        returnKeyType="done"
        onSubmitEditing={handleAdd}
        style={styles.input}
      />
      <Pressable
        onPress={handleAdd}
        disabled={!text.trim()}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
          !text.trim() && styles.buttonDisabled,
        ]}
        accessibilityRole="button"
        accessibilityLabel="Agregar tarea"
      >
        <Text style={styles.buttonText}>Añadir</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 10,
    fontSize: 16,
    color: '#0f172a',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#0284c7',
    borderRadius: 10,
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonDisabled: {
    backgroundColor: '#94a3b8',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
  },
});


