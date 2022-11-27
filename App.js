import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import Task from './components/Task';
import styles from './App.components.style';
import Form from './components/Form';

export default function App() {
  const [taskList, settaskList] = useState([]);
  const handleAddTask = task => {
    settaskList([...taskList, task]);
  };
  const handleDeleteTask = index => {
    Alert.alert('Thông Báo', 'Bán có muốn xóa !', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          let taskListtmp = [...taskList];
          taskListtmp.splice(index,1);
          settaskList(taskListtmp);
        },
      },
      ,
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.Items}>
          {taskList.map((items, index) => {
            return (
              <Task
                key={index}
                title={items}
                number={index + 1}
                onDeleteTask={() => {
                  handleDeleteTask(index);
                }}
              />
            );
          })}
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  );
}
