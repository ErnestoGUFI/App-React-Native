import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks((prev) => [
      { id: Date.now().toString(), text, completed: false },
      ...prev,
    ]);
  };

  const toggleTask = (id) => {
    setTasks((prev) => prev.map((t) => (
      t.id === id ? { ...t, completed: !t.completed } : t
    )));
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.headerArea}>
        <TodoHeader />
      </View>
      <View style={styles.inputArea}>
        <TodoInput onSubmit={addTask} />
      </View>
      <View style={styles.listArea}>
        <TodoList data={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    paddingTop: 56,
    paddingHorizontal: 16,
  },
  headerArea: {
    marginBottom: 12,
  },
  inputArea: {
    marginBottom: 8,
  },
  listArea: {
    flex: 1,
  },
});