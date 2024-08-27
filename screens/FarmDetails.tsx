import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FarmDetails: React.FC = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Alex Mwangi King Farms</Text>
      <Text style={styles.description}>
        33 acres farmland property to provide an escape from the urban lifestyle of metro cities and take people back to their roots.
      </Text>
      
      <View style={styles.sizeContainer}>
        <Text style={styles.sizeText}>0.25 Acre</Text>
        <Text style={styles.sizeText}>0.5 Acre</Text>
        <Text style={styles.sizeText}>1 Acre</Text>
      </View>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Take virtual tour</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#777',
    marginBottom: 30,
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  sizeText: {
    fontSize: 18,
    color: '#000',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default FarmDetails;
