import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.app}>
            <Text style={{ color: "#000" }}>LoginScreen</Text>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    app: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})