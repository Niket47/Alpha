import { View } from 'react-native';
import React, { useState } from 'react';
import { Appbar, Text, TextInput } from 'react-native-paper';

const Transaction = () => {
  const [username, setUsername] = useState('');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Cart" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
      <View
        style={{
          paddingHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text variant="bodyLarge">hello:your name</Text>
        <Text variant="bodyLarge">tell your name</Text>
      </View>
      <TextInput
        label="Email"
        value={username}
        onChangeText={text => setUsername(text)}
      />
    </>
  );
};

export default Transaction;
