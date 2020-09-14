import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

const CategoryMealsScreen = ({ navigation: { getParam } }) => {
  const category = getParam("category");

  return (
    <View>
      <Text>{category.title}</Text>
    </View>
  );
};

CategoryMealsScreen.navigationOptions = ({ navigation: { getParam } }) => ({
  headerTitle: getParam("category").title,
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.primary : "white",
  },
  headerTintColor: Platform.OS === "android" ? "white" : colors.primary,
});

export default CategoryMealsScreen;

const styles = StyleSheet.create({});
