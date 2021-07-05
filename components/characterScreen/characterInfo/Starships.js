import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import globals from "../../../styles/globals";
import Axios from "axios";

const Starships = (data) => {
  const character = data.data;
  const [starship, setStarship] = useState("");
  const [starshipArray, setStarShipArray] = useState([]);

  useEffect(() => {
    if (character.starships.length === 0) {
      setStarship("No known starship");
    }
    if (character.starships.length === 1) {
      Axios.get(character.starships).then((response) => {
        setStarship(response.data.name);
      });
    }
    if (character.starships.length > 1) {
      character.starships.forEach((element) => {
        Axios.get(element).then((response) => {
          //   console.log(response.data.name);
          setStarShipArray([...starshipArray, response.data.name]);
        });
      });
    }
  }, []);

  //I'm not getting this part to work. (Line 20-42) There is something that i have missunderstood in how you render
  //an array. I decided to let it be for now. The main function of the app is working fine.
  const mappedArrey = starshipArray.map((ship) => {
    console.log(ship);
    return (
      <View key={ship}>
        <Text key={ship} style={styles.charrText}>
          Starship: "{ship}"
        </Text>
      </View>
    );
  });

  let renderStarship = (
    <View>
      <Text style={styles.charrText}>Starship: "{starship}"</Text>
    </View>
  );
  if (starship === null || starship === undefined) {
    renderStarship === false;
  }

  return renderStarship ?? { mappedArrey };
};

export default Starships;

const styles = StyleSheet.create({
  charrText: {
    color: globals.textColor.yellowGrey,
    fontSize: globals.fontSize.headerTwo,
    backgroundColor: globals.backgroundColor.mainBackground,
  },
});
