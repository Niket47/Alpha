import { View, Text } from 'react-native';
import React, { useState } from 'react';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import { Button } from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';

const DeepLink = () => {
  const [generatedlink, setGeneratedlink] = useState('');

  const buildLink = async () => {
    const link = await dynamicLinks().buildLink({
      link: 'https://invertase.io',
      // domainUriPrefix is created in your Firebase console
      domainUriPrefix: 'https://alpha123.page.link/XwD9',
      // optional setup which updates Firebase analytics campaign
      // "banner". This also needs setting up before hand
      analytics: {
        campaign: 'banner',
      },
    });

    setGeneratedlink(link);
  };
  return (
    <View>
      <Text>DeepLink</Text>
      <Text>{generatedlink}</Text>
      <Button icon="camera" mode="contained" onPress={() => buildLink()}>
        generate link
      </Button>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => Clipboard.setString(generatedlink)}>
        copy link
      </Button>
    </View>
  );
};

export default DeepLink;
