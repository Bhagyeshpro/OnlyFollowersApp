import { SafeAreaView, StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import ArrowIcons from "react-native-vector-icons/Ionicons";
import VidoeIcons from "react-native-vector-icons/Feather"
import ImageIcon from "react-native-vector-icons/Entypo"
import PostIcons from "react-native-vector-icons/MaterialCommunityIcons"

const NewPostScreen = ({ navigation }) => {
  const [postCaption, setPostCaption] = useState("")

  const selectPostImage = () => {

    // You can also use as a promise without 'callback':
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.newPostHeader}>
        <ArrowIcons name="ios-arrow-back-sharp" onPress={() => navigation.goBack()} style={styles.icon} color="#000000" />
        <Text style={{ flex: 1, color: "black", fontSize: 25, fontWeight: "700", alignSelf: 'center', }}>NEW POST</Text>
        <Pressable style={[styles.button, postCaption ? { backgroundColor: '#00AFF0' } : { backgroundColor: "#A9A9A9" }]}>
          <Text style={styles.buttonText}>POST</Text>
        </Pressable>
      </View>
      <View style={styles.divider} />

      {/* Post Middle */}
      <View style={styles.newPostMiddle}>
        <View>
          <TextInput
            style={styles.input}
            placeholder='Compose new post...'
            placeholderTextColor="gray"
            multiline={true}
            numberOfLines={3}
            onChangeText={(text) => setPostCaption(text)}
          />
          <View style={{ flexDirection: "row", paddingLeft: 5, marginBottom: 15 }}>
            <ImageIcon name="image" style={{ fontSize: 25, marginRight: 20 }} color="#A9A9A9" />
            <VidoeIcons name="video" style={{ fontSize: 25, marginRight: 20 }} color="gray" />
            <PostIcons name="text-box-outline" style={{ fontSize: 25, marginRight: 20 }} color="gray" />
          </View>
        </View>
        <View style={styles.divider} />
      </View>
    </SafeAreaView>
  )
}

export default NewPostScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  newPostHeader: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    padding: 7,
    paddingHorizontal: 10
  },
  divider: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  icon: {
    fontSize: 30,
    marginRight: 10,
    fontWeight: "700",
    alignSelf: 'center',
  },
  button: {
    borderColor: "gainsboro",
    borderWidth: 1,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: '700',
    margin: 10,
    marginHorizontal: 20
  },
  newPostMiddle: {
    marginHorizontal: 10,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 0,
    fontSize: 20,
    fontWeight: "400",
    color: "black",
    marginBottom: 25
  },
})