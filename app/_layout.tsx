import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  const [loading, setLoading] = useState();

  return (
    <View style={styles.fatherContainer}>
      <View></View>
      <Text style={styles.input}>Oi tudo bem?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  fatherContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  input: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
