import React from "react";
import { StyleSheet, Text, View } from "react-native";
import globals from "../../../styles/globals";

const LotrCharacter = (data) => {
  const character = data.data;
  return (
    <View style={styles.positioningContainer}>
      <Text style={styles.charrText}>Name: "{character.name}"</Text>
      <Text style={styles.charrText}>Birth Year: "{character.birth}"</Text>
      <Text style={styles.charrText}>Death: "{character.death}"</Text>
      <Text style={styles.charrText}>Race: "{character.race}"</Text>
      <Text style={styles.charrText}>Spouce: "{character.spouse}"</Text>
    </View>
  );
};

export default LotrCharacter;

const styles = StyleSheet.create({
  charrText: {
    color: globals.textColor.yellowGrey,
    fontSize: globals.fontSize.headerTwo,
    backgroundColor: globals.backgroundColor.mainBackground,
  },
  positioningContainer: {},
});
