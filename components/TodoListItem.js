import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TodoListItem = ({todo, onRemove, onToggle}) => {
  console.log(todo.textValue);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPressOut={onToggle(todo.id)}>
        {todo.checked ? (
          <View style={styles.completeCircle}>
            <Icon name="circledowno" size={30} color="#3143e8" />
          </View>
        ) : (
          <View style={styles.circle} />
        )}
      </TouchableOpacity>

      <Text
        style={[
          styles.text,
          todo.checked ? styles.strikeText : styles.unstrikeText,
        ]}>
        {todo.textValue}
      </Text>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText} onPress={onRemove(todo.id)}>
          <Icon name="delete" size={30} color="#e33057" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },

  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'blue',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },

  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
  },

  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },

  unstrikeText: {
    color: '#29232c',
  },

  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default TodoListItem;
