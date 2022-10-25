import React from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ResultCard from "./ResultCard";
import {withNavigation} from "react-navigation";


const ResultsList = withNavigation(({restaurants, title, navigation}) => {
    if (!restaurants.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={restaurants}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Result", {id: item.id})}>
                        <ResultCard item={item}/>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
})

export default ResultsList;

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: "#aaa",
        marginBottom: 12,
    },
    titleStyle: {
        fontSize: 24,
        fontWeight: "bold",
    },
});
