import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  const alertTest = () => {
    Alert.alert('Check!', 'text', [
      {text: 'NOPE', onPress: () => console.log('NOPE')},
      {text: 'All Clear', onPress: () => allRemove()},
    ]);
  };

  const allRemove = () => {
    setTodos([]);
  };

  return (
    <SafeAreaView
      style={[todos.length >= 3 ? styles.containerTen : styles.container]}>
      <Text style={[todos.length >= 3 ? styles.titleTen : styles.title]}>Todos</Text>
      <TouchableOpacity activeOpacity={0.1} onPress={alertTest}>
        <Text style={[todos.length >= 3 ? styles.titleTen : styles.title]}>All Clear</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },

  containerTen: {
    flex: 1,
    backgroundColor: 'coral',
  },

  title: {
    color: 'white',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },

  titleTen: {
    color: 'whitesmoke',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: 'coral',
  },

  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
});

export default App;
