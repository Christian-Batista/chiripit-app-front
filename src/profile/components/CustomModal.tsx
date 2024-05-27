import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import ChooseProviderButton from './ChooseProviderButton';
import ChooseUserButton from './ChooseUserButton';

interface CustomModalProps {
  isVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  navigation: any;
}

const CustomModal = ({ isVisible, setModalVisible, navigation }: CustomModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(false);
      }}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.textStyle}>X</Text>
          </Pressable>
          <View style={styles.modalInfo}>
            <Text style={styles.modalText}>Configura tu perfil</Text>
            <ChooseProviderButton navigation={{navigation}}/>
            <ChooseUserButton/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center', // Cambiado de 'flex-end' a 'center'
    alignItems: 'center',
    
  },
  modalContent: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
    marginTop: 100,
    paddingBottom: 700, // Ajustar este valor para mover el contenido hacia arriba
    position: 'relative'
  },
  modalInfo: {
    marginTop: 90,
    position: 'absolute',
  },
  button: {
    borderRadius: 20,
    paddingHorizontal: 7,
    paddingVertical: 5,
    elevation: 2,
    position: 'absolute',
    marginStart: 20,
    top: 28,
    right:30
  },
  buttonClose: {
    backgroundColor: '#E8EBEC',
  },
  textStyle: {
    color: '#3A2F2D',
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  modalText: {
    textAlign: 'center',
    color: '#343030',
    fontWeight: '800', // Texto gordito
    fontSize: 20, // Tamaño de fuente más grande
  },
});

export default CustomModal;