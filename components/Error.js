import React from "react";
import { StyleSheet, Text, View } from "react-native";
import globals from "../styles/globals";

const Error = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>Couldn't find what you where looking for</Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  background: {
    backgroundColor: globals.backgroundColor.mainBackground,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: globals.fontSize.headerOne,
    color: globals.textColor.yellowGrey,
  },
});
