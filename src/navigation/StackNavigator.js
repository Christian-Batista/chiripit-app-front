import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../auth/screens/Login";
import Opening from "../Opening"
import ApiTest from '../ApiTest';
import UpdatePassword from '../auth/screens/UpdatePassword'
import Register from '../auth/screens/Register';
import Home from '../home/screens/Home';
import ProviderProfileScreen from '../profile/screens/ProviderProfileScreen';
import BottomTab from './ButtomNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false, // Oculta la barra de navegación
            }}
        >
            <Stack.Screen name='Opening' component={Opening}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Register' component={Register}/>
            <Stack.Screen name='HomeTabs' component={BottomTab} />
            <Stack.Screen name='UpdatePassword' component={UpdatePassword}/>
            <Stack.Screen name='ApiTest' component={ApiTest}/>
            <Stack.Screen name='ProviderProfileScreen' component={ProviderProfileScreen}/>
        </Stack.Navigator>
    );
}

export default StackNavigator;