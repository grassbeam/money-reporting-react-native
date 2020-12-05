import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainNav from './main-navigator';

const Stack = createStackNavigator();


export default function AuthenticatedNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={MainNav} />
        </Stack.Navigator>
    );
}

