import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, Text, FlatList} from 'react-native';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onRemove, onToggle}) => {
  const renderListEl = ({item, index}) => {
    // console.log(`RenderListEl >>>> ${item.id}`);
    return <TodoListItem todo={item} onRemove={onRemove} onToggle={onToggle} />;
  };

  useEffect(() => {
    console.log('todos ---- ');
    console.log(todos.length);
  }, [todos]);

  return (
  //   <ScrollView contentContainerStyle={styles.listContainer}>
  //    {todos.map(todo => {
  //     return (
  //       <TodoListItem
  //         key={todo.id}
  //         {...todo}
  //         onRemove={onRemove}
  //         onToggle={onToggle}
  //       />
  //     );
  //   })}
  // </ScrollView>

    <FlatList
      data={todos}
      renderItem={renderListEl}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default TodoList;
