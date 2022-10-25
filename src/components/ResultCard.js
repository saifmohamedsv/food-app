import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";

const ResultCard = ({item: {image_url, name, rating, review_count,}}) => {
    return (
        <View style={styles.containerStyle}>
            <Image source={{uri: image_url}} style={styles.imageStyle}/>
            <Text style={styles.titleStyle}>{name}</Text>
            <Text style={styles.subTitleStyle}>
                {rating} Stars, {review_count} Reviews
            </Text>
        </View>
    );
};

export default ResultCard;

const styles = StyleSheet.create({
    imageStyle: {width: 250, borderRadius: 8, height: 150},
    containerStyle: {
        width: 250,
        flexDirection: "column",
        marginRight: 12,
        marginVertical: 6,
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 6,
    },
    subTitleStyle: {
        fontSize: 14,
        color: "#aaa",
        fontWeight: "500",
        marginTop: 6,
    },
});
