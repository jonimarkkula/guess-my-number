import { TextInput, View, StyleSheet, Alert } from 'react-native';

import PrimaryButton from '../common/PrimaryButton';
import { Colors } from '../../constants/Colors';
import { useState } from 'react';
import PrimaryTitle from '../common/PrimaryTitle';
import Card from '../common/Card';
import InstructionText from '../common/InstructionText';

interface StartGameScreenProps {
  onPickNumber(pickedNumber: number): void;
}

function StartGameScreen(props: StartGameScreenProps) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText: string) {
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number',
        'Number has to be a number between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }
    props.onPickNumber(chosenNumber);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  return (
    <View style={styles.rootContainer}>
      <PrimaryTitle>Guess My Number</PrimaryTitle>
      <Card>
        <InstructionText>Enter a number between 1 and 99</InstructionText>
        <TextInput
          maxLength={2}
          style={styles.numberInput}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.StartGameScreen.numberInput,
    borderBottomWidth: 2,
    color: Colors.StartGameScreen.numberInput,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
});
