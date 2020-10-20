import React, { useState, useCallback, useEffect } from 'react';

import { StyleSheet, FlatList } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = useState([]);

  const fetchColorPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );

    if (result.ok) {
      const palettes = await result.json();
      setColorPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    fetchColorPalettes();
  }, []);

  return (
    <FlatList
      data={colorPalettes}
      style={styles.list}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          colorPalette={item}
          handlePress={() => navigation.navigate('ColorPalette', item)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
});

export default Home;
