import { TextInput, View, StyleSheet, Alert } from 'react-native';

import PrimaryButton from '../common/PrimaryButton';
import { Colors } from '../../constants/Colors';
import { useState } from 'react';

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
    <View style={styles.inputContainer}>
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
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.StartGameScreen.backgroundColor,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
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
