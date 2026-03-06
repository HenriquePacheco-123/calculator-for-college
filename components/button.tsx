import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  variant: "numbers" | "operations" | "functions" | "zero";
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
      case "zero":
        return styles.buttonZero;
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
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 16,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 0,
    cursor: "pointer",
    fontWeight: "500",
  },
  numbersButton: {
    backgroundColor: "#444C5C",
    borderRadius: "5px",
  },
  functionsButton: {
    backgroundColor: "#505B6C",
    borderRadius: "5px",
  },
  buttonZero: {
    backgroundColor: "#444C5C",
    borderRadius: "5px",
    width: 30,
  },
  textStyle: {
    color: "#FFFF",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Button;
