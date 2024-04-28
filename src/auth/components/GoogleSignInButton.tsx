import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface GoogleSignInButtonProps {
    style?: any
}

const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ( {style}) => {

    
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={() => console.log("presionado")}>
            <View style={styles.content}>
                <Image style={styles.image} source={require("../images/png-clipart-google-google.png")} />
                <Text style={styles.text}>Google</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEEEE',
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 30
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    text: {
        fontSize: 16,
        color: 'black',
        fontWeight: '700'
    }
})

export default GoogleSignInButton;