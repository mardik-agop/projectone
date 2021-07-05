import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Home from "./screens/HomeScreen";
import List from "./screens/ListScreen";
import globals from "./styles/globals";
import CharacterScreen from "./screens/CharacterScreen";
import Register from "./screens/RegisterScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          options={globals.headerOptions}
          name={"Home"}
          component={Home}
        />
        <Stack.Screen
          options={globals.headerOptions}
          name="List"
          component={List}
        />
        <Stack.Screen
          options={globals.headerOptions}
          name="CharacterScreen"
          component={CharacterScreen}
        />
        <Stack.Screen
          options={globals.headerOptions}
          name="RegisterScreen"
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
