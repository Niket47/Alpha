import { View, Text, Image, PermissionsAndroid } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'react-native-image-picker';
import { TextInput, Button } from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

const UplodImage = () => {
  const [picture, setPicture] = useState(null);
  const [image, setImage] = useState(null);

  const openCamara = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });
    console.log(result);
    setPicture(result);
  };

  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'External Storage Write Permission',
          message: 'App needs write permission',
        },
      );
      // If WRITE_EXTERNAL_STORAGE Permission is granted
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        openCamara();
      } else {
        console.log('PermissionsAndroid not');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const UplodImage = async () => {
    const reference = storage().ref(picture.assets[0].fileName);
    // path to existing file on filesystem
    const pathToFile = picture.assets[0].uri;
    // uploads file
    await reference.putFile(pathToFile);
    console.log(pathToFile);
  };

  return (
    <>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>UplodImage</Text>
        {picture !== null ? (
          <Image
            source={{ uri: picture.assets[0].uri }}
            style={{ height: 200, width: 200 }}
          />
        ) : null}
      </View>
      <TextInput
        label="Password"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
      />
      <Button icon="camera" mode="contained" onPress={() => openCamara()}>
        chooseImage
      </Button>
      <Button icon="camera" mode="contained" onPress={() => UplodImage()}>
        UplodImage
      </Button>
    </>
  );
};

export default UplodImage;
