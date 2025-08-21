import { View, FlatList, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

export default function TodoList({ data, onToggle, onDelete }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <View style={styles.itemWrapper}>
          <TodoItem item={item} onToggle={onToggle} onDelete={onDelete} />
        </View>
      )}
      contentContainerStyle={styles.content}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: 12,
  },
  itemWrapper: {
    paddingHorizontal: 2,
  },
  separator: {
    height: 12,
  },
});


