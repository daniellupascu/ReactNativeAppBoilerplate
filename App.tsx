import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";

import TabNavigation from "./navigation/BottomTabNavigation";
import { useLoadFonts } from "./hooks/loadFonts.tsx";

export default function App() {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
