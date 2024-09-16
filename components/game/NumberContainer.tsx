import { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/Colors';

interface NumberContainerProps extends PropsWithChildren {}

function NumberContainer(props: NumberContainerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.PrimaryTitle.titleColor,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.PrimaryTitle.titleColor,
    fontSize: 36,
    fontFamily: 'open-sans-bold',
  },
});
