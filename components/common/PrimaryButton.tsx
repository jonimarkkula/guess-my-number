import { PropsWithChildren } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  PressableStateCallbackType,
} from 'react-native';

import { Colors } from '../../constants/Colors';

interface PrimaryButtonProps extends PropsWithChildren {
  onPress(...params: any): void;
  style?: {};
}

function PrimaryButton(props: PrimaryButtonProps) {
  function stylePressable({ pressed }: PressableStateCallbackType) {
    return pressed
      ? [styles.pressed, styles.buttonInnerContainer]
      : styles.buttonInnerContainer;
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={stylePressable}
        onPress={props.onPress}
        android_ripple={{ color: Colors.PrimaryButton.rippleColor }}
      >
        <Text style={[styles.buttonText, props.style]}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.PrimaryButton.buttonContainerColor,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
