import { PropsWithChildren } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
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

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.PrimaryTitle.titleColor,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.PrimaryTitle.titleColor,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: 'open-sans-bold',
  },
});
