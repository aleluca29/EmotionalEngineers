import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    Linking,
    Dimensions,
} from 'react-native';


import iconHeart from '../../assets/heart.png';
import iconHeadphones from '../../assets/headphones.png';
import firstIcon from '../../assets/icon1.png';
import secondIcon from '../../assets/icon2.png';
import borderImg from '../../assets/border.png';
import bannerImg from '../../assets/banner.png';


const { width, height } = Dimensions.get('window');


const iconSize = width * 0.08;

const MeditationScreen = () => {

    const openYouTubeVideo = (url) => {
        Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
    };


    const navigateToHome = () => {
        console.log('Navigate to Home');

    };

    return (
        <View style={styles.container}>

            <View style={{ height: height * 0.10 }} />

            <Text style={styles.title}>Meditation time!</Text>


            <Text style={styles.subtitle}>
                Ease the mind into a restful night’s sleep with these deep, ambient tones.
            </Text>

            <View style={{ height: height * 0.05 }} />

            <View style={styles.row}>

                <View style={styles.pair}>
                    <Image source={iconHeart} style={styles.icon} />
                    <Text style={styles.textBox}>24.234{'\n'}favorites</Text>
                </View>

                <View style={{ width: width * 0.55 }} />

                <View style={styles.pair}>
                    <Image source={iconHeadphones} style={styles.icon} />
                    <Text style={styles.textBox}>34.234{'\n'}listeners</Text>
                </View>
            </View>

            <View style={{ height: height * 0.05 }} />

            <Text style={styles.pickMeditationText}>Pick a Meditation</Text>

            <View style={{ height: height * 0.02 }} />

            <View style={styles.videoLinkContainer}>
                <TouchableOpacity
                    style={styles.videoLink}
                    onPress={() => openYouTubeVideo('https://www.youtube.com/watch?v=aJOTlE1K90k')}
                >
                    <ImageBackground source={secondIcon} style={styles.iconOverlay} imageStyle={styles.iconBase}>
                        <Image source={firstIcon} style={styles.iconTop} />
                    </ImageBackground>
                    <Text style={styles.videoTitle}>Play Relaxing Sounds for Sleep</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.videoLink}
                    onPress={() => openYouTubeVideo('https://www.youtube.com/watch?v=5qap5aO4i9A')}
                >
                    <ImageBackground source={secondIcon} style={styles.iconOverlay} imageStyle={styles.iconBase}>
                        <Image source={firstIcon} style={styles.iconTop} />
                    </ImageBackground>
                    <Text style={styles.videoTitle}>Play Calm Piano Music 24/7</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bannerContainer}>
                <Image source={bannerImg} style={styles.bannerImage} />
            </View>

            <View style={{ height: height * 0.02 }} />

            <View style={styles.bottomContainer}>
                <Image source={borderImg} style={styles.bannerStyle} />
                <TouchableOpacity onPress={navigateToHome} style={styles.homeButton}>
                    <Text style={styles.homeButtonText}>Back to Home Page</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C09891',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: height * 0.05,
    },
    title: {
        fontSize: width * 0.07,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: height * 0.02,
    },
    subtitle: {
        fontSize: width * 0.045,
        color: '#000',
        textAlign: 'center',
        marginBottom: height * 0.02,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    pair: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    icon: {
        width: iconSize,
        height: iconSize,
        resizeMode: 'contain',
    },
    textBox: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: width * 0.03,
        color: '#000',
        marginTop: 8,
    },
    bannerContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 10,
    },

    bannerImage: {
        width: '90%',
        height: 150,
        resizeMode: 'contain',
    },

    iconOverlay: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },

    iconTop: {
        position: 'absolute',
        width: 8,
        height: 16,
        resizeMode: 'contain',
        alignSelf: 'center',
        top: '50%',
        marginTop: -8,
    },

    videoLink: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    videoTitle: {
        fontSize: width * 0.05,
        color: 'blue',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    videoLinkContainer: {
        alignItems: 'flex-start',
    },

    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center',
        zIndex: 3,
    },

    bannerStyle: {
        width: '100%',
        height: 90,
        resizeMode: 'stretch',
    },
    homeButton: {
        position: 'absolute',
        bottom: 20,
        width: '90%',
        backgroundColor: '#2A0800',
        padding: 15,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeButtonText: {
        color: '#F4DBD8',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default MeditationScreen;