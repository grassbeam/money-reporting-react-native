import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticatedNavigator from '_navigations/authenticated';
import AnnonymousNavigator from '_navigations/anonymous';
import SplashScreen from '_screens/splash';

export default function AppContainer (props) {
    const [isLogin, setLogin] = useState(false);
    const [isLoading, setLoading] = useState(false);

    if (isLoading) {
        return <SplashScreen/>;
    }

    return (
        <NavigationContainer>
            {
                isLogin? (
                    <AuthenticatedNavigator />
                ) : (
                    <AnnonymousNavigator />
                )
            }
        </NavigationContainer>
    );
}

