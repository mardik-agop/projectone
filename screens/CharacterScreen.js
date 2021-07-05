import React from "react";
import { StyleSheet, View } from "react-native";
import CharacterCard from "../components/characterScreen/CharacterCard";
import CharacterInfo from "../components/characterScreen/CharacterInfo";

import Footer from "../components/app/Footer";

function CharacterScreen({ route }) {
  const userChoice = route.params.userChoice;

  return (
    <View style={styles.sizingContainer}>
      <CharacterCard props={route.params} />
      <CharacterInfo props={route.params} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  sizingContainer: {
    flex: 1,
    display: "flex",
  },
});
export default CharacterScreen;
