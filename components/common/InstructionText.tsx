import { StyleSheet, Text } from 'react-native';
import { Colors } from '../../constants/Colors';
import { PropsWithChildren } from 'react';

interface InstructionTextProps extends PropsWithChildren {
  style?: {};
}

function InstructionText(props: InstructionTextProps) {
  return (
    <Text style={[styles.instructionText, props.style]}>{props.children}</Text>
  );
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.StartGameScreen.numberInput,
    fontSize: 16,
  },
});
