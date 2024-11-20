import React from 'react';
import {View, Text,StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../themes';

const LevelSelector = ({onSelectLevel}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Difficulty Level</Text>
      <View>
        {['Easy', 'Medium', 'Hard'].map(level => (
          <TouchableOpacity style={styles.buttons}>
            <Text
              key={level}
              onPress={() => onSelectLevel(level)}
              style={styles.text}>
              {level}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    alignContent: 'center',
    fontWeight: 'bold',
  },
  buttons: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: colors.purple,
    gap: 10,
    borderColor: colors.white,
    borderWidth: 2,
    marginTop: 10,
    cursor:'pointer',
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LevelSelector;
