import React, { useState } from 'react';
import {
    StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Image, StatusBar, Platform, useWindowDimensions
} from 'react-native';

const MoodScreen = ({ navigation }) => {
    const [thoughts, setThoughts] = useState('');
    const { width, height } = useWindowDimensions();

    const handleEmojiPress = (emoji) => {
        console.log('Emoji pressed:', emoji);
    };

    const emojis = [
        { image: require('../../assets/emoji1.png') },
        { image: require('../../assets/emoji2.png') },
        { image: require('../../assets/emoji3.png') },
        { image: require('../../assets/emoji4.png') },
        { image: require('../../assets/emoji5.png') },
    ];

    const factors = ['Sleep', 'Health', 'Friends', 'Education'];

    return (
        <ScrollView style={styles(width, height).container}>
            <View style={styles(width, height).header}>
                <Image
                    source={require('../../assets/white_arrow.png')}
                    style={styles(width, height).profilePhoto}
                />
                <Image
                    source={require('../../assets/Brown_Arrow.png')}
                    style={styles(width, height).overlayImage}
                />

                {/* Rest of the header content */}
            </View>

            <Text style={styles(width, height).subtitle}>How are you feeling today?</Text>
            <View style={styles(width, height).emojiContainer}>
                {emojis.map((emoji, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleEmojiPress(emoji)}
                        style={styles(width, height).emojiButton}
                    >
                        <Image source={emoji.image} style={styles(width, height).emoji} />
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles(width, height).subtitle}>What's affecting your mood?</Text>
            <View style={styles(width, height).factorsContainer}>
                {factors.map((factor, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleEmojiPress(factor)}
                        style={styles(width, height).factorButton}
                    >
                        <Text style={styles(width, height).factorText}>{factor}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles(width, height).subtitle}>Let's write about it</Text>
            <TextInput
                style={styles(width, height).input}
                multiline
                placeholder="How is your day going? Write about your thoughts..."
                placeholderTextColor="#2A0800"
                onChangeText={setThoughts}
                value={thoughts}
            />

            <View style={styles(width, height).imageContainer}>
                <Image
                    source={require('../../assets/take_help.png')}
                    style={styles(width, height).imageStyle}
                />
            </View>

            <View style={styles(width, height).footer}>
                <TouchableOpacity style={styles(width, height).backButton} onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={styles(width, height).backButtonText}>Back to Home Page</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
};

const styles = (width, height) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C09891',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 18,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    profilePhoto: {
        width: width * 0.3,
        height: height * 0.1,
        marginTop: 20,
        resizeMode: 'contain',
    },
    overlayImage: {
        width: width * 0.5,
        height: height * 0.2,
        position: 'absolute',
        top: 50,
        left: 10,
        resizeMode: 'contain',
    },
    subtitle: {
        fontSize: width * 0.06,
        color: '#2A0800',
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        marginVertical: 20,
    },
    emojiContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 20,
        justifyContent: 'space-around',
    },
    emojiButton: {
        // Additional styles if needed
    },
    emoji: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginHorizontal: 10,
    },
    factorsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10,
    },
    factorButton: {
        backgroundColor: '#F4DBD8',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 16,
        margin: 3,
    },
    factorText: {
        color: '#2A0800',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#F4DBD8',
        color: '#2A0800',
        minHeight: 120,
        paddingHorizontal: 20,
        textAlignVertical: 'center',
        marginVertical: 20,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 20,
        borderWidth: 0,
        fontSize: 16,
    },
    imageContainer: {
        alignItems: 'flex-end',
        marginTop: -50,
        marginRight: 10,
    },
    imageStyle: {
        width: 170,
        height: 170,
        resizeMode: 'contain',
    },
    footer: {
        backgroundColor: '#775144',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        backgroundColor: '#2A0800',
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginTop: 20,
        marginBottom: 20,
        width: width * 0.8,
    },
    backButtonText: {
        color: '#F4DBD8',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default MoodScreen;
