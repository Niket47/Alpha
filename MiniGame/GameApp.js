import { View, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import StartGameScren from './Screens/StartGameScren';
import LinearGradient from 'react-native-linear-gradient';

const GameApp = () => {
  // const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

  const my_image = require('../assets/images/peakpx.jpg');

  return (
    <>
      <LinearGradient
        colors={['#8c3b64', '#ddb52f']}
        style={styles.linearGradient}>
        <ImageBackground
          source={my_image}
          resizeMode="cover"
          imageStyle={styles.BgImagestyle}
          style={styles.image}>
          <StartGameScren />
        </ImageBackground>
      </LinearGradient>
    </>
  );
};
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  BgImagestyle: {
    opacity: 0.15,
  },
});
export default GameApp;
