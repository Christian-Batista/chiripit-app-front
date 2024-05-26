import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomModal from '../../profile/components/CustomModal';

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showModalDelay, setShowModalDelay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModalDelay(true);
    }, 1000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showModalDelay) {
      setModalVisible(true);
    }
  }, [showModalDelay]);

  const handleLogout = async () => {
    //await AsyncStorage.removeItem('jwtToken');
    const token = await AsyncStorage.getItem('jwtToken');
    console.log(token)
    //navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text>Bienvenido a la pantalla de home</Text>
      <Button title="Print token" onPress={handleLogout} />
      <CustomModal isVisible={modalVisible} setModalVisible={setModalVisible}/>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default Home;