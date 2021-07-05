import React from "react";
import { View, StyleSheet } from "react-native";
import Footer from "../components/app/Footer";
import BackgroundImage from "../components/homeScreen/BackgroundImage";
import SwBackgroundImage from "../components/homeScreen/SwBackgroundImage";

function Home() {
  return (
    <View style={styles.homeContainer}>
      <SwBackgroundImage />
      <BackgroundImage />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flexDirection: "column",
    backgroundColor: "black",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
