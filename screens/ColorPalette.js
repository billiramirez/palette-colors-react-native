import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Here are some boxes of different colours</Text>
      <FlatList
        data={colors}
        keyExtractor={(item) => item.colorName}
        renderItem={(data) => (
          <ColorBox
            viewStyle={styles.box}
            textStyle={styles.boxText}
            hexCode={data.item.hexCode}
            text={`color: ${data.item.colorName}`}
          />
        )}
        ListHeaderComponent={<Text style={styles.text}>{paletteName}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  cyanBox: {
    backgroundColor: '#2aa198',
  },
  blueBox: {
    backgroundColor: '#268bd2',
  },
  magentaBox: {
    backgroundColor: '#d33682',
  },
  orangeBox: {
    backgroundColor: '#cb4b16',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColorPalette;
