import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CATEGORIES } from "../assets/dummy-data";
import CategoryItem from "../components/CategoryItem";

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      renderItem={({ item }) => <CategoryItem category={item} />}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
