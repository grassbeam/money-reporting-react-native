import React, { useState } from 'react';
import {SafeAreaView, View, Image, StyleSheet} from 'react-native';
import { useWindowsDimensions } from '_helpers/Dimension';
import LoginForm from './Login.Form';


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoImagePortrait: {
    width: '100%',
    height: '100%',
  },
  logoImageLandscape: {
    width: '50%',
    height: '65%',
    marginTop: 10
  },
});

const LoginScreen = (props) => {
  const {navgation} = props;

  const windowData = useWindowsDimensions();

  return (
    <SafeAreaView style={[styles.mainContainer]}>
      <View style={[styles.logoContainer, windowData.isLandscape?{  } : {flex:0.4 } ]}>
        <Image 
          style={windowData.isLandscape? styles.logoImageLandscape : styles.logoImagePortrait}
          source={require('_assets/img/Logo.png')}
        />
      </View>

      <LoginForm />

    </SafeAreaView>
  );
};

export default LoginScreen;