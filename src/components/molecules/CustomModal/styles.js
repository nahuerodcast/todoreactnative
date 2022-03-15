import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalContainerContent: {
    backgroundColor: 'black',
    width: '80%',
    height: '30%',
    justifyContent: 'center',
    borderRadius: 14,
    marginLeft: 40,
    marginTop: 200,
  },
  modalTitle: {
    fontSize: 34,
    color: 'white',
    paddingHorizontal: 25,
  },
  modalContent: {
    fontSize: 24,
    color: 'white',
    padding: 25,
  },
  modalContentText: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  modalButton: {
    marginVertical: 10,
    paddingHorizontal: 25,
  },
});
