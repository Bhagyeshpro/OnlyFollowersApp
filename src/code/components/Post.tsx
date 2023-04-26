import { StyleSheet, Image, Text, View } from 'react-native'
import React, { useState } from 'react'

import VerfiedIcon from "react-native-vector-icons/Octicons"
import ThreeDotsIcon from "react-native-vector-icons/Entypo"
import HeartOutline from "react-native-vector-icons/Ionicons"
import HeartFilled from "react-native-vector-icons/Ionicons"
import DollarIcons from "react-native-vector-icons/FontAwesome5"

const Post = ({ post, user }) => {
    const [isLiked, setIsLiked] = useState(false)

    return (
        <View style={styles.postContainer}>
            {/* Post Header */}
            <View style={styles.postHeader}>
                <Image src={post.postImage} style={styles.profileImage} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", alignItems: 'center', }}>
                        <Text style={{ color: "#000000", fontSize: 22, fontWeight: "bold", flex: 1 }}>{user.name} {
                            <VerfiedIcon name="verified" style={{ fontSize: 17 }} color="#000000" />
                        }</Text>
                        <Text style={{ color: "gray", fontSize: 18, fontWeight: "400", marginRight: 10, alignSelf: 'center', }}>5 hours ago</Text>
                        <ThreeDotsIcon name="dots-three-horizontal" style={{ fontSize: 17, alignSelf: 'center', }} color="gray" />
                    </View>
                    <Text style={{ color: "gray", fontSize: 16, fontWeight: "400" }}>@{user.handle}</Text>
                </View>
                <View style={{ flexDirection: "row", alignSelf: 'center', }}>
                </View>
            </View>

            {/* Post Middle */}
            <View>
                <Text style={{ color: "#000000", fontSize: 20, fontWeight: "400", lineHeight: 25, }}>{post.caption}</Text>
                <Image style={styles.postImage} src={post.postImage} />
            </View>

            {/* Post Bottom */}
            <View style={{ flexDirection: "row", alignItems: 'center', }}>
                {isLiked ? (
                    <HeartFilled onPress={() => setIsLiked(!isLiked)} name="heart" style={{ fontSize: 35 }} color="#00AFF0" />
                ) : (
                    <HeartOutline onPress={() => setIsLiked(!isLiked)} name="heart-outline" style={{ fontSize: 35 }} color="gray" />
                )}
                <DollarIcons name="dollar-sign" style={{ fontSize: 25, marginLeft: 5 }} color="gray" />
            </View>
            <Text style={{ color: "gray", fontSize: 15, fontWeight: "400", }}>40 Likes</Text>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    postContainer: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomColor: "#D3D3D3",
        borderBottomWidth: StyleSheet.hairlineWidth,
        // borderBottomWidth: 
    },
    postHeader: {
        flexDirection: "row",
        // alignItems: "center",
    },
    profileImage: {
        width: 55,
        height: 55,
        borderRadius: 50,
        borderColor: "#ffffff",
        borderWidth: 2,
        marginRight: 10
    },
    postImage: {
        width: "100%",
        height: 400,
        marginVertical: 5,
        resizeMode: "cover"
    },
    postBottom: {
    }
})