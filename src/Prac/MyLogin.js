import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const MyLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   const [password, setPassword] = useState();

  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <View>
      <Text>MyLogin</Text>
      <TextInput
        label="email"
        value={email}
        onChangeText={text => setEmail(text)}
        right={<TextInput.Icon icon="eye" />}
      />
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        label="Password"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
      />
      <Button icon="camera" mode="contained" onPress={() => createUser()}>
        Press me
      </Button>
    </View>
  );
};

export default MyLogin;
