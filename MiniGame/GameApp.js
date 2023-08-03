import { View, ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import StartGameScren from './Screens/StartGameScren';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './Screens/GameScreen';

const GameApp = () => {
  // const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

  const my_image = require('../assets/images/peakpx.jpg');

  const [number, setNumber] = useState();

  const confirmInputnumber = pickrednumber => {
    setNumber(pickrednumber);
  };

  let screen = <StartGameScren forPickNumber={confirmInputnumber} />;

  if (number) {
    screen = <GameScreen nbrpicked={number} />;
  }

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
          <SafeAreaView style={{ flex: 1 }}>{screen}</SafeAreaView>
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
