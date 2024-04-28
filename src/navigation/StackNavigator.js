import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../auth/screens/Login";
import Opening from "../Opening"
import ApiTest from '../ApiTest';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
        >
            <Stack.Screen name='Opening' component={Opening}/>

            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='ApiTest' component={ApiTest}/>
        </Stack.Navigator>
    );
}

export default StackNavigator;