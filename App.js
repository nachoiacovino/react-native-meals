import React from "react";
import useToggle from "./hooks/useToggle";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import CategoriesScreen from "./screens/CategoriesScreen";

const fetchFonts = () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

const App = () => {
  const [loading, toggleLoading] = useToggle(true);

  if (loading) {
    return <AppLoading startAsync={fetchFonts} onFinish={toggleLoading} />;
  }

  return (
    <View>
      <CategoriesScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
