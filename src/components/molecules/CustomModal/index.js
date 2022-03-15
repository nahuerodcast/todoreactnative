import React from 'react';
import {View, Text, Modal, Button} from 'react-native';
import {styles} from './styles';

const CustomModal = ({
  title,
  description,
  selectedItem,
  buttonText,
  onHandleDeleteItem,
  visible,
}) => {
  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <View style={styles.modalContainerContent}>
        <View>
          <Text style={styles.modalTitle}>{title}</Text>
        </View>
        <View>
          <Text style={styles.modalContent}>{description}</Text>
          <Text style={styles.textList}>{selectedItem.value}</Text>
        </View>
        <View style={styles.modalButton}>
          <Button
            title={buttonText}
            color="white"
            onPress={() => onHandleDeleteItem(selectedItem.id)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
