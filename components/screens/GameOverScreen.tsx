import { Image, StyleSheet, Text, View } from 'react-native';

import PrimaryTitle from '../common/PrimaryTitle';
import { Colors } from '../../constants/Colors';
import PrimaryButton from '../common/PrimaryButton';

interface GameOverScreenProps {
  rounds: number;
  userNumber: number | null;
  onStartNewGame(): void;
}

function GameOverScreen(props: GameOverScreenProps) {
  return (
    <View style={styles.gameOverContainer}>
      <PrimaryTitle>GAME OVER!</PrimaryTitle>
      <View style={styles.successImageContainer}>
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
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    margin: 50,
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
