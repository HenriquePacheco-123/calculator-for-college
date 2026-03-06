import Button from "@/components/button";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  const [loading, setLoading] = useState();

  return (
    <View style={styles.fatherContainer}>
      <Button variant="operations" title="" />
      <Button variant="operations" title="x" />
      <Button variant="operations" title="-" />
      <Button variant="operations" title="+" />
      <Button variant="operations" title="=" />
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
