import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TouchableOpacity, Pressable, } from 'react-native'
import React, { useState } from 'react'

import users from "../../assets/users"

import ArrowIcons from "react-native-vector-icons/Ionicons";
import ShareIcons from "react-native-vector-icons/FontAwesome";
import StarIcons from "react-native-vector-icons/Feather"
import VerfiedIcons from "react-native-vector-icons/Octicons"

const ProfileHeader = ({ id, navigation, route, isSubscribed, setIsSubscribed }) => {

    // const { id } = route.params;

    const user = users.find((u) => u.id === id)

    return (
        <View>
            <ImageBackground style={styles.coverImage} source={{ uri: user?.coverImage }}>
                <View style={styles.overlay} />
                <SafeAreaView style={styles.coverTextContainer}>
                    <ArrowIcons name="ios-arrow-back-sharp" onPress={() => navigation.goBack()} style={styles.icon} color="#ffffff" />
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={[styles.text, { fontSize: 24, fontWeight: "500", marginRight: 5 }]}>{user?.name}</Text>
                            <VerfiedIcons name="verified" style={{ fontSize: 17 }} color="#ffffff" />
                        </View>
                        <Text style={styles.text}>1.9k Post • 150k Likes • 5k Fans</Text>
                    </View>
                </SafeAreaView>
            </ImageBackground>

            {/* Bio */}

            <View style={{ marginHorizontal: 10, marginTop: 10, shadowColor: "#000", }}>
                <View style={styles.profileContainer}>
                    <Image style={styles.profileImage} src={user?.avatar} />
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={[styles.iconBorders, { marginRight: 10 }]}>
                            <StarIcons name="star" style={{ fontSize: 25 }} color="#00AFF0" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconBorders}>
                            <ShareIcons name="share-square-o" style={{ fontSize: 25 }} color="#00AFF0" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ color: "#000000", fontSize: 25, fontWeight: "bold", marginRight: 5 }}>{user?.name}</Text>
                    <VerfiedIcons name="verified" style={{ fontSize: 17 }} color="#000000" />
                </View>
                <Text style={[styles.text, { color: "gray", fontWeight: "500", marginBottom: 10 }]} >@{user?.handle}</Text>
                <Text style={{ color: "#000000", fontSize: 20, fontWeight: "400", lineHeight: 25, marginBottom: 10 }}>{user?.bio}</Text>
                <Text style={{ color: "gray", fontSize: 20, fontWeight: "bold", }}>SUBSCRIPTION</Text>

                <Pressable onPress={() =>
                    setIsSubscribed(!isSubscribed)} style={[styles.button, { backgroundColor: isSubscribed ? "#ffffff" : "#00AFF0" }]}>
                    <Text style={[styles.buttonText, { color: isSubscribed ? "#00AFF0" : "white" }]}>{isSubscribed ? "SUBSCRIBED" : "SUBSCRIBE"}</Text>
                    <Text style={[styles.buttonText, { color: isSubscribed ? "#00AFF0" : "white" }]}>{user?.subsciptionPrice === 0 ? "FOR FREE" : `$${user?.subsciptionPrice} / month`}</Text>
                </Pressable>
            </View>
            <View
                style={{
                    borderBottomColor: '#D3D3D3',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
            />
            {/* <Divider orientation="center"></Divider> */}
        </View>
    )
}

export default ProfileHeader

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 16,
    },
    coverImage: {
        height: 190,
        width: "100%",
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        ...StyleSheet.absoluteFillObject,
    },
    coverTextContainer: {
        flexDirection: "row",
        margin: 10,
        alignItems: "center",
    },
    icon: {
        fontSize: 32,
        marginRight: 10,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: "#ffffff",
        borderWidth: 2,
        marginRight: 10
    },
    profileContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginTop: -45,
    },
    iconBorders: {
        borderColor: "lightgray",
        borderWidth: .5,
        height: 50,
        width: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        borderColor: "gainsboro",
        borderWidth: 1,
        borderRadius: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    buttonText: {
        color: "#00AFF0",
        fontSize: 20,
        fontWeight: '600',
    }
})