import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
});

export default CategoryMealsScreen;

const styles = StyleSheet.create({});
