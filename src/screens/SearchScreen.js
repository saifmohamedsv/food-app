import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import yelp from "../axios/yelp";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const onTermSubmit = async () => {
    try {
      const { data } = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "newyork",
        },
      });
      setResults(data.businesses);
    } catch (error) {
      setError("Something Went Wrong, please try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchTerm={term}
        onTermChange={(newValue) => setTerm(newValue)}
        onTermSubmit={onTermSubmit}
      />
      <Text>{error}</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
    backgroundColor: "#fff",
  },
});
