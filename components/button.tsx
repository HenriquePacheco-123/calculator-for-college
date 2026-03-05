import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  variant: "numbers" | "operations" | "functions";
  onPress?: () => void;
  title: string;
}

const Button: React.FC<Props> = ({ variant, onPress, title }) => {
  const getButtonStyle = () => {
    switch (variant) {
      case "operations":
        return styles.operationsButton;
      case "numbers":
        return styles.numbersButton;
      case "functions":
        return styles.functionsButton;
    }
  };

  return (
    <TouchableOpacity style={getButtonStyle()}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  operationsButton: {
    backgroundColor: "#256AE0",
  },
  numbersButton: {
    backgroundColor: "#444C5C",
  },
  functionsButton: {
    backgroundColor: "#505B6C",
  },
  textStyle: {
    color: "#FFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Button;
