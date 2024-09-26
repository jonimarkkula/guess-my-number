import {
  View,
  StyleSheet,
  Alert,
  Text,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

import PrimaryTitle from '../common/PrimaryTitle';
import NumberContainer from '../game/NumberContainer';
import PrimaryButton from '../common/PrimaryButton';
import Card from '../common/Card';
import InstructionText from '../common/InstructionText';
import GuessLogItem from '../game/GuessLogItem';

interface GameScreenProps {
  userSelectedNumber: number;
  onGameOver(numberOfRounds: number): void;
}

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number
): number {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen(this: any, props: GameScreenProps) {
  // Initial boundaries
  const initialGuess = generateRandomBetween(1, 100, props.userSelectedNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([
    { key: Math.random(), value: initialGuess },
  ]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === props.userSelectedNumber) {
      props.onGameOver(guessRounds.length);
    }
  }, [currentGuess, props.userSelectedNumber, props.onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction: 'greater' | 'lower') {
    if (
      (direction === 'lower' && currentGuess < props.userSelectedNumber) ||
      (direction === 'greater' && currentGuess > props.userSelectedNumber)
    ) {
      Alert.alert('Sad Phone', 'Please do not trick me..', [
        { text: 'Sorry', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setGuessRounds((prevGuessRounds) => {
      return [
        { key: Math.random(), value: newRandomNumber },
        ...prevGuessRounds,
      ];
    });
  }

  const guessRoundsListLength = guessRounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="remove" size={24} color={'white'} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="add" size={24} color={'white'} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="remove" size={24} color={'white'} />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="add" size={24} color={'white'} />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.gameScreenContainer}>
      <PrimaryTitle>Opponent's Guess</PrimaryTitle>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              guess={itemData.item.value}
              roundNumber={guessRoundsListLength - itemData.index}
            ></GuessLogItem>
          )}
        ></FlatList>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  instructionText: {
    fontSize: 24,
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
