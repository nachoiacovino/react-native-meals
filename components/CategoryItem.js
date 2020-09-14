import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

const CategoryItem = ({ category, navigation: { navigate } }) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigate("CategoryMeals", { category })}
    >
      <View style={{ ...styles.category, backgroundColor: category.color }}>
        <Text style={styles.title}>{category.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(CategoryItem);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  category: {
    width: Dimensions.get("window").width / 2.35,
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
    padding: 12,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "right",
  },
});
