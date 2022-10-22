import { StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";

const SearchBar = ({ searchTerm, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        value={searchTerm}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        style={styles.inputField}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search...."
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#f0eeee",
    borderRadius: 5,
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 12,
  },
  inputField: {
    color: "#000",
    fontWeight: "500",
    fontSize: 18,
    marginLeft: 6,
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
  },
});
