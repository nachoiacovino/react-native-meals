import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { MEALS } from "../assets/dummy-data";

const CategoryMealsScreen = ({ navigation: { getParam } }) => {
  const category = getParam("category");
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(category.id)
  );

  console.log(displayedMeals);

  return (
    <View>
      <FlatList
        data={displayedMeals}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = ({ navigation: { getParam } }) => ({
  headerTitle: getParam("category").title,
});

export default CategoryMealsScreen;

const styles = StyleSheet.create({});
