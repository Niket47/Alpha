import { View, Text } from 'react-native';
import React from 'react';
import Fscreen from './Goal-App/Fscreen';
import { PaperProvider } from 'react-native-paper';
const App = () => {
  return (
    <PaperProvider>
      <Fscreen />
    </PaperProvider>
  );
};

export default App;
