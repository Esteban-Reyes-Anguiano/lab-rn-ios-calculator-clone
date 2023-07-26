import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width: WIDTH } = Dimensions.get('window');

interface ButtonProps {
  text?: string;
  backgroundColor: string;
  color?: string;
  orange?: boolean;
  special?: boolean;
  function?: () => void;
  children?: React.ReactNode;
}

const Button = ({
  text,
  backgroundColor,
  color,
  special,
  function: onPress,
  children,
}: ButtonProps) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={[
          special ? styles.specialButton : styles.button,
          {
            backgroundColor,
            justifyContent: 'center',
          },
        ]}
      >
        <View>
          {children ? (
            children
          ) : (
            <Text
              style={[
                special ? styles.specialText : styles.text,
                { color },
              ]}
            >
              {text}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 76,
    height: 76,
    borderRadius: 38,
  },
  specialButton: {
    width: (WIDTH - 4 * 76) / 5 + 2 * 76,
    height: 76,
    borderRadius: 38,
  },
  specialText: {
    paddingLeft: 27,
    fontSize: 32,
  },
  text: {
    textAlign: 'center',
    fontSize: 32,
  },
});

export default Button;