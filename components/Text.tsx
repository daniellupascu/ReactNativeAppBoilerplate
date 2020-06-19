import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "pink",
    fontFamily: "Poppins-Medium",
    fontSize: 20,
  },
});

type PropsType = {
  children: React.ReactNode;
};

const TextComponent = ({ children }: PropsType) => (
  <Text style={styles.text}>{children}</Text>
);

export default TextComponent;
