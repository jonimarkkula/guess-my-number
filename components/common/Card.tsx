import { StyleSheet, View, Dimensions } from 'react-native';

import { Colors } from '../../constants/Colors';
import { PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {}

function Card(props: CardProps) {
  return <View style={styles.card}>{props.children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36,
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
});
