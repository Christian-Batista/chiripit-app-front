import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface DarkButtomProps {
    title: string;
    onPress: () => void;
    style?: any
}

const DarkButtom: React.FC<DarkButtomProps> = ({ title, onPress, style }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        onPress();
    }
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={handlePress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500'
    },
    button: {
        width: '90%',
        backgroundColor: '#3D3D3D',
        padding: 18,
        marginHorizontal: 20,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 4,
    }
})

export default DarkButtom;