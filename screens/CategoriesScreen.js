import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { CATEGORIES } from "../assets/dummy-data";

const CategoriesScreen = ({ navigation: { navigate } }) => {
  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.category}
          onPress={() => navigate("CategoryMeals", { category: item })}
        >
          <View>
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  category: {
    flex: 1,
    margin: 10,
    height: 150,
    width: "100%",
  },
});
