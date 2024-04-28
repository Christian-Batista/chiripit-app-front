import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UpdatePassword = () => {
    return (
        <View style={styles.container}>
            <Text>Hola desde UpdatePassword</Text>
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
export default UpdatePassword;