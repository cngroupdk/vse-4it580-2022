import React from 'react';
import { useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native';

import PokemonTile from '../components/PokemonTile';
import { usePokemonList } from '../hooks/usePokemon';
import { Pokemon, PokemonStackScreenProps } from '../types';

export default function PokemonListScreen({
  navigation,
}: PokemonStackScreenProps<'PokemonList'>) {
  const pokemonList = usePokemonList();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Pokemon>) => {
      return (
        <PokemonTile
          pokemon={item}
          onPress={(pokemon) =>
            navigation.navigate('PokemonDetail', {
              id: pokemon.id.toString(),
              name: pokemon.name,
            })
          }
        />
      );
    },
    [navigation],
  );

  if (pokemonList.isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        renderItem={renderItem}
        data={pokemonList.data}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
  },
});
