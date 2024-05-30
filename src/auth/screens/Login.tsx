import React, { useEffect, useState } from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Alert, ActivityIndicator, Modal} from 'react-native';
import GreyInput from '../components/GreyInput';
import DarkButtom from '../components/DarkButton';
import LineComponent from '../components/LineComponent';
import GoogleSignInButton from '../components/GoogleSignInButton';
import FacebookSignInButton from '../components/FacebookSignInButton';
import { API_ROUTE } from '@env';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAuth from '../hooks/useAuth';

const Login = ({ navigation }) => {
  const isAuthenticated = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('Home');
    }
  }, [isAuthenticated])

  const handlerLogin =  async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_ROUTE}/login`, {
        email: email,
        password: password,
      })
      if (response.data.response.token !== null) {
        //guardar el token en el localStorage
      await AsyncStorage.setItem('jwtToken', response.data.response.token);
      navigation.navigate('Home');
      } else {
        Alert.alert("Error", response.data.response.msg);
      }
      
    } catch (error) {
      if (error.code === 'ECONNABORTED') {
        Alert.alert("Error", "La solicitud ha tardado demasiado. Por favor, intenta nuevamente.");
      } else {
        console.log(error);
        Alert.alert("Error", error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isAuthenticated) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.image} source={require("../images/chiripita-blanca.gif")}/>
            </View>
            <View style={styles.loginFormContainer}>
            
                <GreyInput
                label="Email address"
                keyboardType="email-address"
                placeholder="example@gmail.com"
                onChangeText={setEmail}
                
                value={email}
                />
                <GreyInput
                label="Password"
                secureTextEntry
                placeholder="Write your password"
                onChangeText={setPassword}
                value={password}
                />
                <TouchableOpacity onPress={() => navigation.navigate("UpdatePassword")}>
                    <Text style={styles.forgotPassowrd}>Forgot Password</Text>
                </TouchableOpacity>
                <DarkButtom style={styles.darkButtom} title='Sign In' onPress={handlerLogin}/>
            </View>
            <View style={styles.socialButtonContainer}>
                <LineComponent/>
                <View style={styles.socialButtons}>
                    <GoogleSignInButton/>
                    <View style={{width: 35}}></View>
                    <FacebookSignInButton/>
                </View>
                <View style={styles.registerSuggestContainer}>
                    <Text style={styles.registerSuggestText}>Don’t have An Account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
                </View>
            </View>
            {/* Modal para el indicador de carga */}
              <Modal
                transparent={true}
                animationType="none"
                visible={loading}
                onRequestClose={() => {}}
              >
                <View style={styles.modalBackground}>
                  <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator size="large" animating={loading} />
                  </View>
                </View>
              </Modal>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60,
  },
  image: {
    width: "100%",
    height: "100%",

    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
  },
  loginFormContainer: {
    flex: 3.5,
    justifyContent: 'center',
    alignItems: 'center',

  },
  forgotPassowrd: {
    color: '#9C9C9C',
    alignItems: 'flex-end',
    marginStart: 200
  },
  darkButtom: {
    marginTop: 40,
    marginBottom: -30
  },
  socialButtonContainer: {
    flex: 1,
  },
  socialButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  registerSuggestContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 17
  },
  registerSuggestText: {
    fontSize: 12,
    fontWeight: '400',
    marginStart: -15,
    marginEnd: 10
  },
  signUpText: {
    fontSize: 15,
    fontWeight: '600'
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Login;