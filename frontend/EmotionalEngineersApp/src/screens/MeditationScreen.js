// MeditationScreen.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Linking, ScrollView, useWindowDimensions } from 'react-native';
import WheelOfFortune from './WheelOfFortune';

const MeditationScreen = ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    const wheelSize = Math.min(width, height) * 0.8; // Adjust the size of the wheel based on the screen size

    const sectors = [
         { color: '#E5243B', label: 'Song1', url: 'https://www.youtube.com/watch?v=tXheHe3T4lg' },
        { color: '#DDA63A', label: 'Song2', url: 'https://www.youtube.com/watch?v=8PxQiTiX3mg' },
        { color: '#00FF00', label: 'Song3', url: 'https://www.youtube.com/watch?v=0vy_MwBOgTw' },
        { color: '#FFFF00', label: 'Song4', url: 'https://www.youtube.com/watch?v=ffDNsnxWTwo' },
        { color: '#0000FF', label: 'Song5', url: 'https://www.youtube.com/watch?v=d9C4y0DBJKc' },
        { color: '#4B0082', label: 'Song6', url: 'https://www.youtube.com/watch?v=cI4ryatVkKw' },
    ];

    const onWheelFinish = (sector) => {
        console.log("Selected Sector:", sector.label);
        if (sector.url) {
            Linking.openURL(sector.url).catch(err => console.error("Couldn't open URL", err));
        }
    };

    return (
        <View style={styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.container}>
                    <Text style={styles.title}>Meditation time!</Text>
                    <WheelOfFortune sectors={sectors} radius={wheelSize / 2} onFinished={onWheelFinish} />
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.homeButton}>
                    <Text style={styles.homeButtonText}>Back to Home Page</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#C09891',
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2A0800',
        textAlign: 'center',
        marginBottom: 100,
    },
    homeButton: {
        backgroundColor: '#2A0800',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: '60%',
        alignSelf: 'center',
    },
    homeButtonText: {
        textAlign: 'center',
        color: '#F4DBD8',
        fontWeight: 'bold',
        fontSize: 18,
    },
    footer: {
        height: 60,
        backgroundColor: '#775144',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MeditationScreen;
