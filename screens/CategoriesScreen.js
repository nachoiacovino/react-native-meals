import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { CATEGORIES } from "../assets/dummy-data";
import { colors } from "../constants/colors";

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
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.primary : "white",
  },
  headerTintColor: Platform.OS === "android" ? "white" : colors.primary,
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
