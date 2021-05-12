import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native'

function Home() {
    return (
        <View style={styles.container}>
            <Text>
                Home Screen
            </Text>
            <Button
                title='Click Here' />
        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})