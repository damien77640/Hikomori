import React from 'react';
import {
    View,
    Text,
    TextInput,
    Platform,
    StyleSheet,
    Image,
    Button
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {AuthContext} from '../Context'




function LoginScreen({ navigation }) {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_TextInputChange: false,
        secureTextEntry: true,
    })

    const {signIn} = React.useContext(AuthContext)

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        })
    }

    const eyePressed = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const textInputChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                email: val,
                check_TextInputChange: true
            })
        } else {
            setData({
                ...data,
                email: val,
                check_TextInputChange: false
            })
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logoHK} source={require('../Images/HikomoriBlackLogo.png')} />
                <Text style={styles.text_header}>
                    Welcome !
                    </Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color='#05375a'
                        size={20} />
                    <TextInput
                        placeholder="Your Email"
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_TextInputChange ?
                        <Feather
                            name='check-circle'
                            color='green'
                            size={20} />
                        : null}
                </View>
                <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color='#05375a'
                        size={20} />
                    <TextInput
                        placeholder="Your Password"
                        style={styles.textInput}
                        autoCapitalize='none'
                        secureTextEntry={data.secureTextEntry}
                        onChangeText={(val) => handlePasswordChange(val)} />
                    <Feather
                        name='eye-off'
                        color='grey'
                        size={20}
                        onPress={() => eyePressed()}
                    />
                </View>
                <Button title='Sign In' onPress={() => {signIn()}} />
                <Button title='Sign Up' onPress={() => navigation.navigate('SignUpScreen')} />
            </View>
        </View>
    )
}

export default LoginScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    logoHK: {
        top: 40,
        left: '11%',
        height: 200,
        width: 300,
    }
})
