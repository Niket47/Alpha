import { View, Text, SafeAreaView, Animated } from 'react-native';
import React, { useRef, useState } from 'react';
import { Button, IconButton } from 'react-native-paper';
// import Animated from 'react-native-reanimated';

const MyAnimation = ({ navigation }) => {
  const animation = useRef(new Animated.Value(0)).current;
  const [btnclicked, setBtnClicked] = useState(false);

  const startAnimation = () => {
    Animated.spring(animation, {
      toValue: btnclicked ? 0 : 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <SafeAreaView>
        <View
          style={{
            marginTop: 150,
            marginBottom: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.View
            style={[
              {
                width: 100,
                height: 100,
                backgroundColor: 'orange',
              },
              {
                transform: [
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 100],
                    }),
                  },
                ],
              },
            ]}></Animated.View>
        </View>

        <Button
          icon="camera"
          mode="contained"
          onPress={() => {
            startAnimation();
            setBtnClicked(!btnclicked);
          }}>
          Press me
        </Button>
      </SafeAreaView>
    </>
  );
};

export default MyAnimation;
