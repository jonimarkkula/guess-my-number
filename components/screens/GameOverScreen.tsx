import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

import PrimaryTitle from '../common/PrimaryTitle';
import { Colors } from '../../constants/Colors';
import PrimaryButton from '../common/PrimaryButton';

interface GameOverScreenProps {
  rounds: number;
  userNumber: number | null;
  onStartNewGame(): void;
}

function GameOverScreen(props: GameOverScreenProps) {
  const { height, width } = useWindowDimensions();

  let imageSize = 300;
  let margin = 50;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
    margin = 25;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    margin: margin,
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.gameOverContainer}>
        <PrimaryTitle>GAME OVER!</PrimaryTitle>
        <View style={[styles.successImageContainer, imageStyle]}>
          <Image
            style={styles.successImage}
            source={require('../../assets/images/success.png')}
          ></Image>
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{props.rounds}</Text>{' '}
          rounds to guess your number{' '}
          <Text style={styles.highlight}>{props.userNumber}</Text>.
        </Text>
        <PrimaryButton
          onPress={props.onStartNewGame}
          style={styles.startNewGameButton}
        >
          Start New Game
        </PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  gameOverContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  successImageContainer: {
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
  },
  successImage: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.StartGameScreen.numberInput,
  },
  startNewGameButton: {
    fontSize: 24,
  },
});
