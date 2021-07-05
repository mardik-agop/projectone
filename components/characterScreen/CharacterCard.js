import React from "react";
import { StyleSheet, Image, View } from "react-native";
import globals from "../../styles/globals";
import dataBase from "../../assets/characters/charObject";
import Error from "../Error";

const CharacterCard = (props) => {
  const pressedCharacter = props.props.characterData;
  const searchedCharacter = props.props.searchedCharacter;

  const character = pressedCharacter ?? searchedCharacter;

  const chosenCharacter = dataBase.characters.find(
    (element) => element.name === character.name
  );

  try {
    return (
      <View style={styles.background}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={chosenCharacter.image}
        />
      </View>
    );
  } catch (err) {
    if (character === undefined) {
      return <Error />;
    }
    if (chosenCharacter === undefined) {
      return (
        <View style={styles.background}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../../assets/favicon.png")}
          />
        </View>
      );
    }
  }
};

export default CharacterCard;

const styles = StyleSheet.create({
  background: {
    backgroundColor: globals.backgroundColor.mainBackground,
    flex: 1,
    paddingTop: 20,
  },
  text: {
    fontSize: globals.fontSize.headerOne,
    color: globals.textColor.yellowGrey,
  },
  image: {
    height: "60%",
    width: "60%",
  },
});
