import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

const CategoryItem = ({ category, navigation: { navigate } }) => {
  return (
    <TouchableOpacity
      style={styles.category}
      onPress={() => navigate("CategoryMeals", { category })}
    >
      <View>
        <Text>{category.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(CategoryItem);

const styles = StyleSheet.create({
  category: {
    flex: 1,
    margin: 10,
    height: 150,
    width: "100%",
  },
});
