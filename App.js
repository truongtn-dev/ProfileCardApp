import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Button, StyleSheet } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";
import StyledScreen from "./src/screens/StyledScreen";

export default function App() {
  const [showStyled, setShowStyled] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />

      {showStyled ? <StyledScreen /> : <HomeScreen />}

      <View style={styles.footer}>
        <Button
          title={
            showStyled
              ? "Xem bản StyleSheet (Cơ bản)"
              : "Xem bản Styled-Components"
          }
          onPress={() => setShowStyled(!showStyled)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 16,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#e2e8f0",
  },
});
