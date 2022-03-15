import React, {useState} from 'react';

import {
  View,
  Button,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import Input from './components/atoms/Input/index';
import CustomModal from './components/molecules/CustomModal';
import {styles} from './styles';

const App = () => {
  const [text, setText] = useState('');
  const [textList, setTextList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleOnChangeInput = value => {
    setText(value);
  };

  const addItem = () => {
    if (text !== '') {
      setTextList([...textList, {id: textList.length + 1, value: text}]);
      setText('');
    }
  };

  const handleDeleteItem = id => {
    const newList = textList.filter(itemList => itemList.id !== id);
    setSelectedItem({});
    setTextList(newList);
    setModalVisible(!modalVisible);
  };

  const onHandleModal = id => {
    setSelectedItem(textList.find(itemList => itemList.id === id));
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView>
      <View style={styles.containerInput}>
        <Text style={styles.headingStyle}>Todos RN</Text>
        <Input
          placeholder="Ingresá una tarea"
          autoCorrect={false}
          autoFocus={true}
          placeholderTextColor="#616161"
          style={styles.textInput}
          value={text}
          handleOnChangeText={handleOnChangeInput}
        />
      </View>
      <Button title="Agregar" color="#010101" onPress={() => addItem()} />
      <View style={styles.containerList}>
        <FlatList
          data={textList}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => onHandleModal(item.id)}>
              <Text style={styles.textList}>{item.value}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <CustomModal
        visible={modalVisible}
        title="Eliminar Item"
        description="Estas seguro que queres eliminar este item?"
        selectedItem={selectedItem}
        buttonText="Si"
        onHandleDeleteItem={handleDeleteItem}
      />
    </SafeAreaView>
  );
};

export default App;
