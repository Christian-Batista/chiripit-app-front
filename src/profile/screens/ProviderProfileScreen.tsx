import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProviderProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Saludos desde la pantalla donde vamos a trabajar la creacion de perfil de proveedor.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ProviderProfileScreen;