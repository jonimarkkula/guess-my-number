import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import StartGameScreen from './components/screens/StartGameScreen';
import { Colors } from './constants/Colors';
import GameScreen from './components/screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState<null | number>(null);

  function pickedGameHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
  }

  let SelectedScreen: JSX.Element = (
    <StartGameScreen onPickNumber={pickedGameHandler} />
  );

  if (userNumber) {
    SelectedScreen = <GameScreen />;
  }

  return (
    <LinearGradient
      colors={[
        Colors.Application.backgroundColor1,
        Colors.Application.backgroundColor2,
      ]}
      style={styles.appContainer}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.appContainer}
        imageStyle={styles.backgroundImage}
      >
        {SelectedScreen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});
