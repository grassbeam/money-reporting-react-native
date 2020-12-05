import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '_screens/login';

const Stack = createStackNavigator();

export default function AuthNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} 
                options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}