import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/Colors';

interface GuessLogItemProps {
  roundNumber: number;
  guess: number;
}

function GuessLogItem(props: GuessLogItemProps) {
  return (
    <View style={style.listItem}>
      <Text style={style.itemText}>#{props.roundNumber}</Text>
      <Text style={style.itemText}>Opponent's Guess: {props.guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const style = StyleSheet.create({
  listItem: {
    borderColor: Colors.PrimaryTitle.titleColor,
    borderWidth: 2,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.Application.backgroundColor2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 3,
    shadowOpacity: 0.25,
    width: '100%',
  },
  itemText: {
    fontFamily: 'open-sans',
    color: 'white',
  },
});
