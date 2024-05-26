import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Alert } from "react-native";
import GreyInput from "../components/GreyInput";
import DarkButtom from "../components/DarkButton";
import SmallInput from "../components/SmallInput";
import axios from "axios"
import { API_ROUTE } from "@env";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({ navigation }) => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    /**Metodo para registrar a un usuario */
    const handleRegister = async () => {
        try {
            const response = await axios.post(`${API_ROUTE}/register`, {
              name: name,
              last_name: lastName,
              email: email,
              password: password,
              confirm_password: confirmPassword
            })
            //guardar el token en el localStorage
            await AsyncStorage.setItem('jwtToken', response.data.response.token);
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.image} source={require("../images/chiripita-blanca.gif")}/>
            </View>
            <View style={styles.registerFormContainer}>
                <View style={styles.inputsFlex}>
                <SmallInput 
                    label="First name"
                    placeholder="Patrick"
                    onChangeText={setName}
                    value={name}

                    />
                    <View style={{width: 30}}/>
                    <SmallInput 
                    label="Last name"
                    placeholder="Batista"
                    onChangeText={setLastName}
                    value={lastName}

                    />
                </View>
                <View style={styles.formContent}>
                    <GreyInput 
                    label="Email address"
                    placeholder="example@gmail.com"
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    value={email}

                    />
                    <GreyInput 
                    label="Password"
                    placeholder="Write your password"
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password}

                    />
                    <GreyInput 
                    label="Confirm password"
                    placeholder="Write your password"
                    secureTextEntry
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    />
                </View>
                <View>
                    <DarkButtom title="Sign Up" style={{marginTop: -10}} onPress={handleRegister}/>
                </View>
            </View>
            <View style={styles.registerSuggestContainer}>
                    <Text style={styles.registerSuggestText}>You have An Account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.signUpText}>Sign In</Text>
                </TouchableOpacity>
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
      },
      logoContainer: {
        flex: 1.5,
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
      registerFormContainer: {
        flex: 3.8,
      },
      formContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputsFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: -15,
      },
      registerSuggestContainer: {
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10, // Ajusta el espacio superior
        marginBottom: 10, // Ajusta el espacio inferior
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
      }

})

export default Register;