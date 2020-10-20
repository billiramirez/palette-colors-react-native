import React from 'react';
import { View, Text } from 'react-native';

const ColorBox = ({ viewStyle, textStyle, text, hexCode }) => {
  const background = {
    backgroundColor: hexCode,
  };
  return (
    <View style={[viewStyle, background]}>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
};

export default ColorBox;
