import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function TodoItem({ item, onToggle, onDelete }) {
  const handleToggle = () => onToggle?.(item.id);
  const handleDelete = () => onDelete?.(item.id);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handleToggle}
        style={[styles.checkbox, item.completed && styles.checkboxChecked]}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: item.completed }}
        accessibilityLabel={item.text}
      >
        {item.completed ? <Text style={styles.checkmark}>✓</Text> : null}
      </Pressable>
      <Pressable onPress={handleToggle} style={styles.textContainer}>
        <Text style={[styles.text, item.completed && styles.textCompleted]} numberOfLines={2}>
          {item.text}
        </Text>
      </Pressable>
      <Pressable onPress={handleDelete} style={styles.deleteButton} accessibilityRole="button" accessibilityLabel="Eliminar tarea">
        <Text style={styles.deleteText}>✕</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#94a3b8',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
  },
  checkboxChecked: {
    backgroundColor: '#22c55e',
    borderColor: '#16a34a',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  text: {
    fontSize: 16,
    color: '#0f172a',
  },
  textCompleted: {
    color: '#64748b',
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    marginLeft: 12,
    padding: 6,
  },
  deleteText: {
    color: '#ef4444',
    fontSize: 18,
    fontWeight: '700',
  },
});


