import { View, Text, PermissionsAndroid, Alert } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import RNFetchBlob from 'rn-fetch-blob';

const Downloder = () => {
  const [url, setUrl] = useState('');

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Cool Photo App Storage Permission',
          message:
            'Cool Photo App needs access to your Storage ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // console.log('You can use the Storage');
        DownlodFile();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const DownlodFile = () => {
    const date = new Date();
    const { config, fs } = RNFetchBlob;
    const fileDir = fs.dirs.DownloadDir;

    config({
      // add this option that makes response data to be stored as a file,
      // this is much more performant.
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          fileDir +
          '/download_' +
          Math.floor(date.getDate() + date.getSeconds() / 2) +
          '.mp4',
        description: 'file',
      },
    })
      .fetch('GET', url, {
        //some headers ..
      })
      .then(res => {
        // the temp file path
        console.log('The file saved to ', res.path());
        Alert.alert('downlod sucess---');
      });
  };

  return (
    <>
      <View>
        <Text>Downloder</Text>
        <TextInput
          label="text url"
          value={url}
          onChangeText={text => setUrl(text)}
        />
        <Button
          icon="camera"
          mode="contained"
          onPress={() => {
            if (url !== '') {
              requestStoragePermission();
            } else {
              Alert.alert('add url');
            }
          }}>
          Downlode file
        </Button>
      </View>
    </>
  );
};

export default Downloder;
