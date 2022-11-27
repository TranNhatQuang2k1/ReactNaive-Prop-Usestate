import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
const Form = props => {
  const [task, setTask] = useState('');
  const handleAddTask = () => {
    if (task.length === 0) {
      alert('Xin nhap !');
      return false;
    }
    props.onAddTask(task);
    Keyboard.dismiss();
    setTask('');
  };

  return (
    <View style={styles.addTask}>
      <TextInput
        value={task}
        onChangeText={text => setTask(text)}
        placeholder="Your Task"
        style={styles.input}
      />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.iconwrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
