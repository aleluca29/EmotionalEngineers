import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    Linking,
    useWindowDimensions,
} from 'react-native';

import iconHeart from '../../assets/heart.png';
import iconHeadphones from '../../assets/headphones.png';
import firstIcon from '../../assets/icon1.png';
import secondIcon from '../../assets/icon2.png';
import borderImg from '../../assets/border.png';
import bannerImg from '../../assets/banner.png';

const MeditationScreen = ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    const iconSize = width * 0.08;

    const openYouTubeVideo = (url) => {
        Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
    };

    const navigateToHome = () => {
        navigation.navigate('HomeScreen');
    };

    return (
        <View style={styles(width, height, iconSize).container}>
            <View style={{ height: height * 0.10 }} />

            <Text style={styles(width, height, iconSize).title}>Meditation time!</Text>

            <Text style={styles(width, height, iconSize).subtitle}>
                Ease the mind into a restful night’s sleep with these deep, ambient tones.
            </Text>

            <View style={{ height: height * 0.05 }} />

            <View style={styles(width, height, iconSize).row}>
                <View style={styles(width, height, iconSize).pair}>
                    <Image source={iconHeart} style={styles(width, height, iconSize).icon} />
                    <Text style={styles(width, height, iconSize).textBox}>24.234{'\n'}favorites</Text>
                </View>

                <View style={{ width: width * 0.55 }} />

                <View style={styles(width, height, iconSize).pair}>
                    <Image source={iconHeadphones} style={styles(width, height, iconSize).icon} />
                    <Text style={styles(width, height, iconSize).textBox}>34.234{'\n'}listeners</Text>
                </View>
            </View>

            <View style={{ height: height * 0.05 }} />

            <Text style={styles(width, height, iconSize).pickMeditationText}>Pick a Meditation</Text>

            <View style={{ height: height * 0.02 }} />

            <View style={styles(width, height, iconSize).videoLinkContainer}>
                <TouchableOpacity
                    style={styles(width, height, iconSize).videoLink}
                    onPress={() => openYouTubeVideo('https://www.youtube.com/watch?v=aJOTlE1K90k')}
                >
                    <ImageBackground source={secondIcon} style={styles(width, height, iconSize).iconOverlay} imageStyle={styles(width, height, iconSize).iconBase}>
                        <Image source={firstIcon} style={styles(width, height, iconSize).iconTop} />
                    </ImageBackground>
                    <Text style={styles(width, height, iconSize).videoTitle}>Play Relaxing Sounds for Sleep</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles(width, height, iconSize).videoLink}
                    onPress={() => openYouTubeVideo('https://www.youtube.com/watch?v=5qap5aO4i9A')}
                >
                    <ImageBackground source={secondIcon} style={styles(width, height, iconSize).iconOverlay} imageStyle={styles(width, height, iconSize).iconBase}>
                        <Image source={firstIcon} style={styles(width, height, iconSize).iconTop} />
                    </ImageBackground>
                    <Text style={styles(width, height, iconSize).videoTitle}>Play Calm Piano Music 24/7</Text>
                </TouchableOpacity>
            </View>

            <View style={styles(width, height, iconSize).bannerContainer}>
                <Image source={bannerImg} style={styles(width, height, iconSize).bannerImage} />
            </View>

            <View style={{ height: height * 0.02 }} />

            <View style={styles(width, height, iconSize).bottomContainer}>
                <Image source={borderImg} style={styles(width, height, iconSize).bannerStyle} />
                <TouchableOpacity onPress={navigateToHome} style={styles(width, height, iconSize).homeButton}>
                    <Text style={styles(width, height, iconSize).homeButtonText}>Back to Home Page</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = (width, height, iconSize) => StyleSheet.create({
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
