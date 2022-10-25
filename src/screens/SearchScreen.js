import {ScrollView, StyleSheet, View} from "react-native";
import React, {useState} from "react";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import ResultsList from "../components/ResultsList";

const Search = () => {
    const [term, setTerm] = useState("");
    const [searchApi, results, error] = useRestaurants();

    const filterResultsByPrice = (price) => {
        return results?.filter((item) => item.price === price);
    };

    return (
        <View style={styles.container}>
            <SearchBar
                searchTerm={term}
                onTermChange={(newValue) => setTerm(newValue)}
                onTermSubmit={() => searchApi(term)}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <ResultsList
                    restaurants={filterResultsByPrice("$")}
                    title="Cost Effective"
                />
                <ResultsList
                    restaurants={filterResultsByPrice("$$")}
                    title="Bit Pricer"
                />
                <ResultsList
                    restaurants={filterResultsByPrice("$$$")}
                    title="Big spender"
                />
            </ScrollView>
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
