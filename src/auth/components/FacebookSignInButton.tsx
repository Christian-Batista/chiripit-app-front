import { GoogleSignin } from "@react-native-google-signin/google-signin";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface FacebookSignInButtonProps {
    style?: any
}

const FacebookSignInButton: React.FC<FacebookSignInButtonProps> = ( {style}) => {
    
    return (
        <TouchableOpacity style={[styles.container, style]} >
            <View style={styles.content}>
                <Image style={styles.image} source={require("../images/facebook-logo-facebook-icon-transparent-free-png.webp")} />
                <Text style={styles.text}>Facebook</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEEEE',
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 30
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 40,
        height: 35,
        marginStart: -6,
        marginEnd: 3

    },
    text: {
        fontSize: 16,
        color: 'black',
        fontWeight: '700',
        marginStart: -10
    }
})

export default FacebookSignInButton;