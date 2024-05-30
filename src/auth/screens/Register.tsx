import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Alert, Modal, ActivityIndicator } from "react-native";
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
    const [loading, setLoading] = useState(false);

    /** Metodo para registrar a un usuario */
    const handleRegister = async () => {
        if (!name || !lastName || !email || !password || !confirmPassword) {
            Alert.alert("Error", "Todos los campos son obligatorios.");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Error", "Las contraseñas no coinciden.");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post(`${API_ROUTE}/register`, {
                name,
                last_name: lastName,
                email,
                password,
                confirm_password: confirmPassword
            });

            if (response.data.response.token) {
                await AsyncStorage.setItem('jwtToken', response.data.response.token);
                navigation.navigate('Home');
            } else {
                Alert.alert("Error", response.data.response.msg);
            }
        } catch (error) {
            if (error.response && error.response.status === 422) {
                const errors = error.response.data.errors;
                let errorMessage = "";

                if (errors.email) {
                    errorMessage += `${errors.email[0].msg}\n`;
                }
                if (errors.confirm_password) {
                    errorMessage += `${errors.confirm_password[0].msg}\n`;
                }

                Alert.alert('Error de validación', errorMessage);
            } else {
                console.log(error);
                Alert.alert("Error", error.message || "Ha ocurrido un error inesperado.");
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.image} source={require("../images/chiripita-blanca.gif")} />
            </View>
            <View style={styles.registerFormContainer}>
                <View style={styles.inputsFlex}>
                    <SmallInput 
                        label="First name"
                        placeholder="Patrick"
                        onChangeText={setName}
                        value={name}
                    />
                    <View style={{ width: 30 }} />
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
                    <DarkButtom title="Sign Up" style={{ marginTop: -10 }} onPress={handleRegister} />
                </View>
            </View>
            <View style={styles.registerSuggestContainer}>
                <Text style={styles.registerSuggestText}>You have An Account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.signUpText}>Sign In</Text>
                </TouchableOpacity>
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
        marginTop: 10,
        marginBottom: 10,
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
    }
});

export default Register;