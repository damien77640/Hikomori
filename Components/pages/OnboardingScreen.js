import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


function OnboardingScreen({navigation}) {
    return (
        <Onboarding
            onSkip={()=> navigation.navigate('Dashboard')}
            onDone={()=> navigation.navigate('Dashboard')}
            pages={[
                {
                    backgroundColor: '#A6E4D0',
                    image: <Image style={styles.logoHK} source={require('../Images/HikomoriBlackLogo.png')} />,
                    title: 'Bienvenue !',
                    subtitle: 'Bienvenue sur notre application HIKOMORI !',
                },
                {
                    backgroundColor: '#A6E4D0',
                    image: <Image source={require('../../assets/favicon.png')} />,
                    title: 'Hikomori',
                    subtitle: 'Renseigner, organiser, partager vos mangas en un click',
                }
            ]}
        />
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoHK: {
        height: 200,
        width: 300,
    }
})