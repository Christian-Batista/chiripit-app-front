import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ServicesScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Hola desde la pantalla servicios</Text>
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

export default ServicesScreen;