import { Image, StyleSheet, Text, ImageBackground, TouchableOpacity, View } from 'react-native'
import React from 'react'

const UserCard = ({ user, navigation }) => {
    return (
        <ImageBackground source={{ uri: user.coverImage }} style={styles.userCard}
        >
            <TouchableOpacity style={styles.overlay} onPress={() => navigation.navigate('Profile', {
                id: user.id,
                name: user.name,
                avatar: user.avatar,
                handle: user.handle,
                coverImage: user.coverImage,
                posts: user.posts
            })} />
            {/* Image */}
            <Image
                src={user.avatar}
                style={styles.userImage}
            />

            {/* Name and Handle */}
            <View style={styles.textContainer}>
                <Text style={[styles.text, { fontWeight: "500" }]}>{user.name}</Text>
                <Text style={[styles.text, { fontSize: 15 }]}>@{user.handle}</Text>
            </View>
        </ImageBackground>
    )
}

export default UserCard

const styles = StyleSheet.create({
    userCard: {
        backgroundColor: "gray",
        padding: 10,
        flexDirection: "row",
        alignItems: "flex-end",
        borderRadius: 5,
        marginBottom: 10,
        overflow: "hidden",
    },
    userImage: {
        width: 75,
        height: 75,
        borderRadius: 50,
        borderColor: "#ffffff",
        borderWidth: 1,
        marginRight: 10
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        ...StyleSheet.absoluteFillObject,
        // absoluteFillObject = postion: "absolute", top, botton, left, right : 0
    },
    textContainer: {

    },
    text: {
        color: "white",
        fontSize: 22,
    }
})