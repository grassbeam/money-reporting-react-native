import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',
    },
  });
  

const LoginForm = (props) => {

  const [inputForm, setInputForm] = useState({ email:"", password:"" });


  return (
    <View style={ [ styles.inputContainer]}>
        <Text color="#000000">Email</Text>
        {/* <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => { 
            const stat = inputForm;  
            stat["email"] = text;
            setInputForm(stat);
        }}
        value={inputForm.email}
        /> */}
        <Text color="#000000">Password</Text>
    </View>
  );
};


export default LoginForm;

