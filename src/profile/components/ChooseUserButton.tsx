import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ChooseUserButton = () => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => console.log("user")}>
                <Text style={styles.label}>Usuario</Text>
                <Text style={styles.leyend}>Como usuario en la aplicación, puedes buscar y encontrar servicios que necesitas y pagar por ellos de manera segura y conveniente.</Text>
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
        color: '#878892',
    }
})
export default ChooseUserButton;