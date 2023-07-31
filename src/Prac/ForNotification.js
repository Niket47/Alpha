import { View, Text, Button } from 'react-native';
import React from 'react';
import notifee, { AndroidStyle } from '@notifee/react-native';

const ForNotification = () => {
  const displaynotification = async () => {
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'demo Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
        style: {
          type: AndroidStyle.BIGPICTURE,
          picture:
            'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
        },
      },
    });
  };

  return (
    <>
      <View>
        <Text>ForNotification</Text>
      </View>
      <View>
        <Button
          title="Display Notification"
          onPress={() => {
            displaynotification();
          }}
        />
      </View>
    </>
  );
};

export default ForNotification;
