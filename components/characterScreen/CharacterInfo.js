import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import StarWarsCharacter from "./characterInfo/StarWarsCharacter";
import LotrCharacter from "./characterInfo/LotrCharacter";
import globals from "../../styles/globals";

const CharacterInfo = (props) => {
  const userChoice = props.props.userChoice;
  const characterObject =
    props.props.characterData ?? props.props.searchedCharacter;

  if (userChoice === "lotr") {
    return (
      <View style={styles.characterInfo}>
        <LotrCharacter data={characterObject} />
      </View>
    );
  }

  if (userChoice === "starwars") {
    return (
      <View style={styles.characterInfo}>
        <StarWarsCharacter data={characterObject} />
      </View>
    );
  }
};

export default CharacterInfo;

const styles = StyleSheet.create({
  characterInfo: {
    backgroundColor: globals.backgroundColor.mainBackground,
    paddingBottom: 20,
  },
});
