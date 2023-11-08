import React, { useState } from 'react';
import {
    StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Image, StatusBar, Platform,
} from 'react-native';

const MoodScreen = ({ navigation }) => {
    const [thoughts, setThoughts] = useState('');
    const handleEmojiPress = (emoji) => {
        // Handle the press event, possibly setting state or navigating
        console.log('Emoji pressed:', emoji);
    };
    const emojis = [
        { image: require('../../assets/emoji1.png') },
        { image: require('../../assets/emoji2.png') },
        { image: require('../../assets/emoji3.png') },
        { image: require('../../assets/emoji4.png') },
        { image: require('../../assets/emoji5.png') },

        // ... more emoji objects
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/white_arrow.png')} // Replace with your photo's actual path
                    style={styles.profilePhoto}
                />
                <Image
                    source={require('../../assets/Brown_Arrow.png')} // The new image you want to overlay
                    style={styles.overlayImage}
                />

                {/* Rest of the header content */}
            </View>

            <Text style={styles.subtitle}>How are you feeling today?</Text>
            {/* You would add your emoji images here */}
            <View style={styles.emojiContainer}>
                {emojis.map((emoji, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleEmojiPress(emoji)}
                        style={styles.emojiButton}
                    >
                        <Image source={emoji.image} style={styles.emoji} />
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.subtitle}>What's affecting your mood?</Text>
            <View style={styles.factorsContainer}>
                {/* Factor buttons will go here */}
                <TouchableOpacity style={styles.factorButton}><Text>Work</Text></TouchableOpacity>
                {/* ... more buttons ... */}
            </View>

            <Text style={styles.subtitle}>Let's write about it</Text>
            <TextInput
                style={styles.input}
                multiline
                placeholder="How is your day going? Write about your thoughts..."
                onChangeText={setThoughts}
                value={thoughts}
            />

            <TouchableOpacity style={styles.helpButton}>
                <Text style={styles.helpButtonText}>Take help</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text>Back to Home Page</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C09891',
        // If you have a SafeAreaView, you might not need padding at the top
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 18,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Only needed for Android
    },
    profilePhoto: {
        width: 120, // Adjust the size as needed
        height: 60, // Adjust the size as needed
        marginTop: 20,
        resizeMode: 'contain', // This will ensure the image is not cut

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2A0800',
        alignSelf: 'center',
        marginVertical: 20,
    },
    subtitle: {
        fontSize: 25,
        color: '#2A0800',
        fontWeight: 'bold', // Make the font bold
        textAlign: 'center', // Center the text horizontally
        alignSelf: 'center', // Center the text within the container if it's not full width
        marginVertical: 20,
    },

    factorsContainer: {
        // styles for the factors affecting mood container
    },
    factorButton: {
        // styles for each factor button
    },
    input: {
        backgroundColor: '#FFF',
        minHeight: 100,
        borderColor: '#2A0800',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginVertical: 20,
    },
    helpButton: {
        backgroundColor: '#8B4513',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 30,
        alignSelf: 'center',
        marginVertical: 20,
    },
    helpButtonText: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
    },
    backButton: {
        alignSelf: 'center',
        marginVertical: 20,
    },
    overlayImage: {
        width: '50%', // Smaller width as a percentage of its container
        height: '60%', // Smaller height as a percentage of its container
        position: 'absolute',
        top: 50, // Adjust top position as needed
        left: 10, // Adjust left position as needed
        resizeMode: 'contain', // This will ensure the image is not cut
    },
    emojiContainer: {
        flexDirection: 'row', // Align items in a row
        // justifyContent: 'space-evenly', // Evenly space the emoji images across the container
        alignItems: 'center', // Center items vertically
        marginVertical: 20,
        marginHorizontal: 20,

    },
    emojiButton: {
        // You can add styles for the touchable area if needed
    },
    emoji: {
        width: 50, // Set the width for your emoji images
        height: 50, // Set the height for your emoji images
        resizeMode: 'contain', // Ensure the entire emoji is visible and aspect ratio is maintained
        marginHorizontal: 10,
    },
});

export default MoodScreen;
