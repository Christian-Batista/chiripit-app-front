import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ChooseProviderButton = () => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => console.log("provider")}>
                <Text style={styles.label}>Proveedor</Text>
                <Text style={styles.leyend}>Como proveedor en la aplicación, puedes publicar los servicios que ofreces, establecer tarifas y cobrar por tus servicios.</Text>
            </Pressable>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#E8EBEC',
        paddingHorizontal: 30,
        paddingVertical:50,
        borderRadius: 30,
        marginTop: 50,
    },
    label: {
        color: '#0A0B0D',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10
    },
    leyend: {
        color: '#878892'
    }
})
export default ChooseProviderButton;