import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { country } = route.params; 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>País: {country.name.common}</Text>
      <Text style={styles.text}>poupulação: {country.population}</Text>
      <Text style={styles.text}>Região: {country.region}</Text>
      <Text style={styles.text}>Capital: {country.capital}</Text>
      <Text style={styles.text}>Area: {country.area} km²</Text>
      <Text style={styles.text}>Linguas faladas: {Object.values(country.languages).join(', ')}</Text>
      <Text style={styles.text}>Moeda: {Object.values(country.currencies).map((currency) => currency.name).join(', ')}</Text>      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default DetailsScreen;
