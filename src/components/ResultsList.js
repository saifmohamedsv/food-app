import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import ResultCard from "./ResultCard";

const ResultsList = ({ restaurants, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        data={restaurants}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ResultCard item={item} />}
      />
      {!restaurants.length && (
        <Text
          style={{ width: "100%", marginVertical: 24, textAlign: "center" }}
        >
          Nothing to show for now...
        </Text>
      )}
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
    marginVertical: 12,
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
