/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

const MainApp = () => (
  // <Provider store={store}>
  //   <App />
  // </Provider>
  <App />
);

AppRegistry.registerComponent(appName, () => MainApp);
