import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Opening = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Hola desde Opening</Text>
            <Button title="Login" onPress={() => navigation.navigate("Login")}/>
            <Button title="testear api" onPress={() => navigation.navigate("ApiTest")}/>
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

export default Opening;