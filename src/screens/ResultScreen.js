import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Image, Linking, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import yelp from "../axios/yelp";

function ResultScreen({navigation}) {
    const businessID = navigation.getParam('id')
    const [businessData, setBusinessData] = useState(null)


    const getBusinessData = async (id) => {
        const {data} = await yelp.get(id)
        setBusinessData(data)
    }

    console.log(businessData)
    useEffect(() => {
        getBusinessData(businessID)
    }, [businessID]);

    if (!businessData) return <Text style={{color: "red", fontSize: 48, textAlign: "center"}}>Loading...</Text>
    const {
        name,
        categories,
        display_phone,
        hours,
        location,
        photos,
        url,
        transactions,
        review_count,
        rating
    } = businessData;

    const handlePress = (url) => {
        console.log(url)
        // Checking if the link is supported for links with custom URL scheme.
        const supported = Linking.canOpenURL(url);

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.businessName}>{name}</Text>
            <Text style={styles.businessCats}><Text style={styles.businessDesc}>🍎 Categories:</Text>
                🍕 {categories.map(res => res.title).join(" 🍕 ")}
            </Text>
            <Text style={styles.businessCats}><Text style={styles.businessDesc}>📞 Phone:</Text> {display_phone}
            </Text>
            <Text style={styles.businessCats}><Text style={styles.businessDesc}>📍 Address:</Text> {location.address1}
            </Text>
            <Text style={styles.businessCats}><Text
                style={styles.businessDesc}>🔒 Opened Now:</Text> {hours[0].is_open_now ? "Yes" : "No"}</Text>

            <Text style={{fontSize: 20, fontWeight: "bold", marginBottom: 12, marginTop: 24}}>Gallery</Text>
            <FlatList
                style={{maxHeight: 150}}
                showsHorizontalScrollIndicator={false}
                data={photos}
                horizontal
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <Image style={styles.imageStyle} source={{uri: item}}/>
                )}
            />
            <Text style={styles.businessCats}><Text style={styles.businessDesc}>🛵 Transactions: </Text>
                {transactions.map(res => res).join(", ")}
            </Text>
            <Text style={styles.businessCats}><Text style={styles.businessDesc}>👦 Reviews: </Text>
                {review_count}
            </Text>
            <Text style={styles.businessCats}><Text style={styles.businessDesc}>😋 Rating: </Text>
                {rating}
            </Text>

            <TouchableOpacity onPress={() => handlePress(url)}>
                <Text style={styles.visitButton}>Message The Business</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ResultScreen;
const styles = StyleSheet.create({
    imageStyle: {width: 250, borderRadius: 8, height: 150, marginRight: 12},
    viewStyle: {
        padding: 12,
        backgroundColor: "white",
        flex: 1
    },
    businessName: {
        fontSize: 32,
        fontWeight: "bold",
    },
    businessDesc: {
        fontWeight: "bold",
        color: "#000"
    },
    businessCats: {
        fontSize: 16,
        fontWeight: "medium",
        color: "#828282",
        marginTop: 12
    },
    visitButton: {
        marginVertical: 12,
        textAlign: "center",
        backgroundColor: "#e2e2e2",
        borderRadius: 12,
        paddingVertical: 24,
        paddingHorizontal: 12,
        color: "#000",
        borderStyle: "solid",
        overflow: "hidden"
    }
});