import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface DisplayProps {
  display: string;
}

const Display = ({ display }: DisplayProps) => {
  return (
    <View>
      <Text style={styles.title}>
        {display}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    textAlign: 'right',
    fontSize: 70,
    margin: 5,
    marginBottom: 2,
  },
});

export default Display;