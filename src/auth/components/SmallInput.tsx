import React from "react";
import { StyleSheet, TextInput as RNTTextInput, View, Text, TextInputProps } from "react-native";

interface SmallInputProps extends TextInputProps {
    label: string;
    errorMessage: string;
    onChangeText: (text: string) => void;
    value: string;
    style?: any;
    errorMargin?: any;
    placeholder?: string
}

const SmallInput: React.FC<SmallInputProps> = ({ label, onChangeText, value, style, placeholder, errorMessage, errorMargin, ...rest }) => {
    const handleTextChange = (text: string) => {
        onChangeText(text);
    };
    return (
        <View style={[styles.container, style]}>
            <View style={styles.imputFlex}>
                <Text style={styles.label}>{label}</Text>
                <Text style={[styles.errorMessage, errorMargin]}>{errorMessage}</Text>
            </View>
            
            <View>
                <RNTTextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#999"
                    {...rest} // Pasar todas las props restantes, incluyendo keyboardType
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 160, 
    },
    label: {
    marginStart: 20,
    marginBottom: 1,
    color: '#565656',
    fontSize: 16
    },
    input: {
        fontSize: 18,
        paddingStart: 30,
        backgroundColor: '#EEEEEE',
        paddingVertical: 15,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#D7D7D7'
    },
    imputFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
    },
    errorMessage: {
        color: '#FF5733',
        marginStart: 35,
        fontSize: 12,
        fontWeight: '500'
    }
});

export default SmallInput;