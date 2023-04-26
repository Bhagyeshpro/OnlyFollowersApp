import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import users from "../../assets/users"

import Post from '../components/Post';
import ProfileHeader from '../components/ProfileHeader';

import LockIcon from "react-native-vector-icons/MaterialIcons"
import VidoeIcons from "react-native-vector-icons/Feather"
import ImageIcon from "react-native-vector-icons/Entypo"
import PostIcons from "react-native-vector-icons/MaterialCommunityIcons"

const ProfileScreen = ({ navigation, route }) => {

    const [isSubscribed, setIsSubscribed] = useState(false)

    const { id } = route.params;

    const user = users.find((u) => u.id === id)

    if (!isSubscribed) {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ProfileHeader
                    id={id}
                    isSubscribed={isSubscribed}
                    setIsSubscribed={setIsSubscribed}
                    navigation={navigation}
                    route={route}
                />
                <View style={styles.lockPosts}>
                    <LockIcon name="lock-outline" style={{ fontSize: 80 }} color="#D0D0D0" />
                    <View style={styles.lockButtonContainer}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start', }}>
                                <VidoeIcons name="video" style={{ fontSize: 18, }} color="gray" />
                                <Text style={{ color: "gray", fontWeight: "700", fontSize: 16, marginRight: 5 }}>  40 • </Text>
                                <ImageIcon name="image" style={{ fontSize: 18, }} color="gray" />
                                <Text style={{ color: "gray", fontWeight: "700", fontSize: 16, marginRight: 5 }}>  70 •</Text>
                                <PostIcons name="text-box-outline" style={{ fontSize: 18, }} color="gray" />
                                <Text style={{ color: "gray", fontWeight: "700", fontSize: 16, marginRight: 5 }}>  30</Text>
                            </View>
                            <LockIcon name="lock-outline" style={{ fontSize: 20 }} color="gray" />
                        </View>
                        <Pressable onPress={() => setIsSubscribed(!isSubscribed)} style={styles.button}>
                            <Text style={styles.buttonText}>SUBSCRIBE TO SEE USER'S POSTS</Text>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={{ backgroundColor: "#ffffff", flex: 1 }}>

            {/* Posts */}
            <FlatList
                data={user?.posts}
                renderItem={({ item }) => <Post post={item} user={user} />}
                ListHeaderComponent={() => (
                    <ProfileHeader
                        id={id}
                        isSubscribed={isSubscribed}
                        setIsSubscribed={setIsSubscribed}
                        navigation={navigation}
                        route={route}
                    />
                )}
            />
        </SafeAreaView>

    )
}

// Adding icons

export default ProfileScreen

const styles = StyleSheet.create({
    button: {
        borderColor: "gainsboro",
        borderWidth: 1,
        borderRadius: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#00AFF0"
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: '600',
        marginHorizontal: 40,
        marginVertical: 10,
    },
    lockPosts: {
        flex: 1,
        backgroundColor: "#E8E8E8",
        alignItems: "center",
        justifyContent: "space-around",
        margin: 10,
    },
    lockButtonContainer: {
        borderWidth: 2,
        padding: 15,
        borderColor: "#D0D0D0",
        borderRadius: 5,
        marginBottom: -15,
    }

})