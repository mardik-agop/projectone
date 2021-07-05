import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import globals from "../../styles/globals";
import Axios from "axios";
import { SWAPI_URL, LOTR_URL, BEARER_TOKEN } from "@env";

function CharacterList({ props }) {
  const [characters, setCharacters] = useState([]);
  const navigation = useNavigation();

  const userChoice = props.listName;
  useEffect(() => {
    try {
      if (userChoice === "starwars") {
        Axios.get(`${SWAPI_URL}/people/`).then((response) => {
          setCharacters(
            response.data.results.map((character) => {
              return character;
            })
          );
        });
      }
      if (userChoice === "lotr") {
        Axios.get(`${LOTR_URL}/character?limit=10`, {
          headers: {
            authorization: `Bearer ${BEARER_TOKEN}`,
          },
        }).then((response) => {
          setCharacters(
            response.data.docs.map((character) => {
              return character;
            })
          );
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const charList = characters.map((character) => {
    return (
      <TouchableOpacity
        key={character.name}
        onPress={() =>
          navigation.navigate("CharacterScreen", {
            characterData: character,
            userChoice: userChoice,
          })
        }
      >
        <Text style={styles.nameList}> {character.name}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {charList}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  nameList: {
    color: globals.textColor.yellowGrey,
    textAlign: "center",
    fontSize: 20,
    overflow: "scroll",
  },
});

export default CharacterList;
