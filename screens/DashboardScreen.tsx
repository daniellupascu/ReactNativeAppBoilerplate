import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import TextComponent from "../components/Text";

const styles = StyleSheet.create({
  screen: {
    minHeight: "100%",
    backgroundColor: "#fff",
  },
});

const DashboardScreen = () => {
  const navigation = useNavigation();
  const onButtonPress = () => {
    navigation.navigate("AddBook");
  };

  return (
    <View style={styles.screen}>
      <Text>Dashboard</Text>
      <TextComponent>jjjjjadsjksad</TextComponent>
      <Button title={"press"} onPress={onButtonPress} />
    </View>
  );
};

export default DashboardScreen;
