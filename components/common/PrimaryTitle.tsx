import { Text, StyleSheet, View } from 'react-native';
import { PropsWithChildren } from 'react';

interface PrimaryTitleProps extends PropsWithChildren {}

function PrimaryTitle(props: PrimaryTitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.children}</Text>
    </View>
  );
}

export default PrimaryTitle;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 4,
    borderColor: 'white',
    maxWidth: '80%',
    width: 300,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    padding: 12,
    textAlign: 'center',
  },
});
