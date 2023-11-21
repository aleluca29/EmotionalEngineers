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
    const factors = [ 'Sleep', 'Health', 'Friends','Education'];


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
                <View style={styles.factorsContainer}>
                    {factors.map((factor, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleFactorPress(factor)}
                            style={styles.factorButton}
                        >
                            <Text style={styles.factorText}>{factor}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                {/* ... more buttons ... */}
            </View>

            <Text style={styles.subtitle}>Let's write about it</Text>
            <TextInput
                style={styles.input}
                multiline
                placeholder="How is your day going? Write about your thoughts..."
                placeholderTextColor="#2A0800" // Set the placeholder text color
                onChangeText={setThoughts}
                value={thoughts}
            />
            {/* Add your Image component here */}
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/take_help.png')} // Replace with your image's actual path
                    style={styles.imageStyle}
                />
            </View>


            {/* Footer */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonText}>Back to Home Page</Text>
                </TouchableOpacity>
            </View>

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
    input: {
        backgroundColor: '#F4DBD8', // Set the background color
        color: '#2A0800', // Set the text color
        minHeight: 120, // Adjust the height as needed
        paddingHorizontal: 20, // Horizontal padding inside the input box
        textAlignVertical: 'center', // Vertically center the text
        marginVertical: 20, // Margin vertical
        width: '80%', // Width of the input box, adjust as needed
        alignSelf: 'center', // Center the input box horizontally
        borderRadius: 20, // Set to at least half of the minHeight for an oval shape
        borderWidth: 0, // Remove border
        fontSize: 16, // Adjust font size as necessary
    },

    backButton: {
        backgroundColor: '#2A0800', // Background color of the button
        borderRadius: 30, // More rounded corners
        paddingVertical: 15, // Increased vertical padding
        paddingHorizontal: 30, // Increased horizontal padding
        marginTop: 20, // Space above the button
        marginBottom: 20, // Space below the button
        // alignSelf: 'center', // Center button, not needed if footer is centering content
        width: '80%', // Set width to 80% of the footer's width
        // Remove width if you want padding to define the size
    },
    backButtonText: {
        color: '#F4DBD8', // Text color
        fontSize: 20, // Increased font size
        fontWeight: 'bold', // Font weight
        textAlign: 'center', // Center text
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
    factorsContainer: {
        flexDirection: 'row', // Align items in a row
        flexWrap: 'wrap', // Allow the contents to wrap to the next line
        justifyContent: 'space-around', // Evenly distribute space around the items
        alignItems: 'center', // Center items vertically
        marginVertical: 10,
    },
    factorButton: {
        backgroundColor: '#F4DBD8', // The specified button color
        borderRadius: 20, // Rounded corners
        paddingVertical: 10, // Vertical padding
        paddingHorizontal: 16, // Horizontal padding
        margin: 3, // Margin around the buttons to ensure they don't touch
        // Additional styling as needed
    },
    factorText: {
        color: '#2A0800', // Text color
        fontWeight: 'bold', // Make the text bold
        fontSize: 16, // Increase the font size
        textAlign: 'center', // Center the text inside the button


        // Add text styling as needed
    },
    imageContainer: {
        alignItems: 'flex-end', // Align image container to the right
        marginTop: -50, // Space between the text input and the image
        marginRight: 10, // Space from the right edge of the screen
    },
    imageStyle: {
        width: 170, // Set the width of your image
        height: 170, // Set the height of your image
        resizeMode: 'contain', // Keep the image's aspect ratio
    },
    footer: {
        backgroundColor: '#775144', // Background color of the footer
        padding: 10, // Padding inside the footer
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
    },

});

export default MoodScreen;
