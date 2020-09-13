import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CATEGORIES } from "../assets/dummy-data";

const CategoriesScreen = ({ navigation: { navigate } }) => {
  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={styles.category}>
          <Text>{item.title}</Text>
        </View>
      )}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  category: {
    flex: 1,
    margin: 10,
    height: 150,
  },
});
