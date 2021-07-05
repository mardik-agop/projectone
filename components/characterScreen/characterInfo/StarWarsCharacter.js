import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Axios from "axios";
import globals from "../../../styles/globals";

import Starships from "./Starships";

const StarWarsCharacter = (data) => {
  const character = data.data;

  const [characterHomeWorld, setCharacterHomeWorld] = useState();

  useEffect(() => {
    Axios.get(character.homeworld).then((response) => {
      setCharacterHomeWorld(response.data.name);
    });
  }, []);

  return (
    <View style={styles.positioningContainer}>
      <Text style={styles.charrText}>Name: "{character.name}"</Text>
      <Text style={styles.charrText}>Birth Year: "{character.birth_year}"</Text>
      <Text style={styles.charrText}>Home World: "{characterHomeWorld}"</Text>
      <Starships data={character} />
    </View>
  );
};

export default StarWarsCharacter;

const styles = StyleSheet.create({
  charrText: {
    color: globals.textColor.yellowGrey,
    fontSize: globals.fontSize.headerTwo,
    backgroundColor: globals.backgroundColor.mainBackground,
  },
});
