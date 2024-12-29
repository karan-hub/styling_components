import { AppRegistry } from 'react-native';
import AppPro from './Apppro'; // Ensure this file exists
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppPro);
