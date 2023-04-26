import { StyleSheet, View, FlatList, Button, Pressable, Text, SafeAreaView } from 'react-native'
import React from 'react'
import users from "../../assets/users"
import UserCard from "../components/UserCard"

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.app}>
      <Pressable style={styles.button} onPress={() => navigation.navigate("NewPost")}>
        <Text style={styles.buttonText}>NEW POST</Text>
      </Pressable>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserCard navigation={navigation} user={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#f2f4f4",
    padding: 10,
  },
  button: {
    borderColor: "gainsboro",
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00AFF0"
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 40,
    marginVertical: 10,
  },

})