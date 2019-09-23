import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';

// import App from './App';
import Agenda from './src/screens/Agenda'

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(Agenda);
