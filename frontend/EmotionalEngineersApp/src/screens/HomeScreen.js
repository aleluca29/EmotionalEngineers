import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
    // Function to handle profile picture press
    const handleProfilePress = () => {
        // Navigate to Edit Profile Screen
        navigation.navigate('EditProfileScreen');
    };

    // Function to handle bell icon press
    const handleBellPress = () => {
        // Handle bell icon press, maybe navigate to notifications screen
    };
    const navigateToTherapy = () => {
        // Replace 'TherapyScreen' with the actual route name you've defined for the therapy screen
        navigation.navigate('TherapyScreen');
    };

    // Function to handle notification icon press
    const handleNotificationPress = () => {
        // Handle notification icon press
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header with Profile, Bell, and Notification Icons */}
            <View style={styles.headerContainer}>
                {/* Profile Picture */}
                <TouchableOpacity onPress={handleProfilePress}>
                    <Image
                        source={require('../../assets/profile_picture.png')}
                        style={styles.profilePic}
                    />
                </TouchableOpacity>

                {/* Icons Container */}
                <View style={styles.iconsContainer}>
                    {/* Bell Icon and Notification Badge */}
                    <View style={styles.bellContainer}>
                        <TouchableOpacity onPress={handleBellPress}>
                            <Image
                                source={require('../../assets/bell_icon.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                        {/* Notification Badge */}
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>3</Text>
                        </View>
                    </View>

                    {/* Other Icons */}
                    {/* ... */}
                </View>
            </View>

            {/* Welcome Text */}
            <Text style={styles.welcomeText}>
                WELCOME TO EMO-TIONAL ENGINEERS!{'\n'}
                LET'S ENGINEER SOME SMILES AND WELLNESS TODAY!
            </Text>
            {/* Therapy Section */}
            <View style={styles.frame}>
                <View style={styles.overlapGroup}>
                    <View style={styles.overlap}>
                        <View style={styles.div}>
                            {/* Adding the therapy text here */}
                            <Text style={styles.therapyTitle}>FEELING MEHH...?</Text>
                            <Text style={styles.therapySubtitle}>TALK TO YOUR DIGITAL THERAPIST!</Text>

                            <Image style={styles.group} source={require('../../assets/group14.png')} />

                        </View>
                        <Image style={styles.vector} source={require('../../assets/Vector.png')} />
                    </View>
                    <Image style={styles.img} source={require('../../assets/Vector.png')} />
                    <Image style={styles.vector2} source={require('../../assets/Vector2.png')} />
                    {/* Start a Conversation Button */}
                    <TouchableOpacity
                        onPress={() => {/* Navigation or other logic */}}
                        style={styles.conversationButton}
                    >
                        <Text style={styles.conversationButtonText}>Start a Conversation</Text>
                    </TouchableOpacity>
                </View>
            </View>


            {/* Meditation  Section */}
            <View style={styles.frame}>
                <View style={styles.mood_overlapGroup}>
                    <View style={styles.overlap}>
                        <View style={styles.div}>
                            {/* Adding the therapy text here */}
                            <Text style={styles.therapyTitle}>DECLUTTER THE NOISE IN YOUR MIND</Text>


                            <Image style={styles.group_mood} source={require('../../assets/mood_image.png')} />

                        </View>

                    </View>

                    {/* Start a Conversation Button */}
                    <TouchableOpacity
                        onPress={() => {/* Navigation or other logic */}}
                        style={styles.moodButton}
                    >
                        <Text style={styles.moodButtonText}>Track your Mood</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* Mood Section */}
            <View style={styles.frame}>
                <View style={styles.med_overlapGroup}>
                    <View style={styles.overlap}>
                        <View style={styles.div}>
                            {/* Adding the therapy text here */}
                            <Text style={styles.therapyTitle}>DISCOVER YOUR INNER PEACE</Text>


                            <Image style={styles.group_med} source={require('../../assets/med_photo.png')} />

                        </View>

                    </View>

                    {/* Start a Conversation Button */}
                    <TouchableOpacity
                        onPress={() => {/* Navigation or other logic */}}
                        style={styles.medButton}
                    >
                        <Text style={styles.medButtonText}>Meditate Now</Text>
                    </TouchableOpacity>
                </View>
            </View>



            {/* Add any additional Text or other components for the mood section here */}

            {/* Content of Home Screen */}
            {/* ... Rest of the home screen content ... */}
            {/* Spacer View */}
            <View style={{ height: 80 }}></View>

            {/* Footer */}
            <View style={styles.footer}>
                {/* You can add any content you want in the footer here */}
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C09891',

    },
    bellContainer: {
        position: 'relative',
        marginTop: -8, // Adjust this value to move the bell icon up
    },
    badge: {
        position: 'absolute',
        right: -6,
        top: -3, // You may need to adjust this value as well after changing the marginTop of the bellContainer
        backgroundColor: 'red',
        borderRadius: 9,
        width: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        paddingTop: 60,  // Increased top padding to move items lower
        marginBottom: 20, // Adds space below the header
    },
    profilePic: {
        width: 60, // Set the width of the profile pic
        height: 60, // Set the height of the profile pic
        borderRadius: 25, // Make it round
    },
    iconsContainer: {
        flexDirection: 'row',
    },
    icon: {
        width: 30, // Width of the icon
        height: 40, // Height of the icon
        marginLeft: 5, // Space between icons
    },

    welcomeText: {
        marginHorizontal: 20,
        marginTop: 0, // Adjust as needed
        fontSize: 16, // Adjust as needed
        fontWeight: 'bold',
        color: '#2A0800',
        textAlign: 'center',

    },
    section: {
        marginVertical: 8,
        alignItems: 'center',

    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2A0800',
    },
    sectionSubtitle: {
        fontSize: 16,
        color: '#2A0800',
        marginBottom: 5,
    },
    sectionImage: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionButton: {
        backgroundColor: '#F4DBD8',
        color: '#2A0800',
        padding: 10,
        borderRadius: 20,
        overflow: 'hidden',
    },
    frame: {
        height: 180,
        width: '95%',
        alignSelf: 'center',
        marginTop: 150,
        alignItems: 'flex-start', // Align children to the start of the cross axis
        justifyContent: 'flex-end', // Align children to the end of the main axis
        paddingHorizontal: 10, // Add padding on the sides
        paddingBottom: 30,
    },
    overlapGroup: {
        backgroundColor: "#dcfdb2",
        borderRadius: 9.65,
        height: 289,
        position: "relative",
        width: '100%', // Set width relative to the frame
    },

    overlap: {
        height: 116,
        position: "absolute",
        top: 69,
        width: 337,
    },
    div: {
        position: "absolute",
        top: 105,
        bottom: 0, // Align to the bottom of its parent
        right: -35, // Align to the right of its parent
        width: 184, // Width of the image
        height: 116, // Height of the image
    },
    group: {
        width: '100%', // Take up 100% of the .div container's width
        height: '100%', // Take up 100% of the .div container's height
        resizeMode: 'contain', // Preserve aspect ratio
    },
    divWrapper: {
        alignItems: "flex-start",
        backgroundColor: "#ffffff",
        borderRadius: 48.25,
        display: "flex",
        flexDirection: "row",
        paddingVertical: 14.47,
        paddingHorizontal: 19.3,
        position: "absolute",
        top: 65,
        width: 169,
    },
    textWrapper: {
        color: "#2a0800",
        fontFamily: "Roboto-Medium",
        fontSize: 12,
        fontWeight: "500",
        letterSpacing: 0.96,
        lineHeight: 14, // Approximation for 'normal' line-height
        marginTop: -0.97,
        width: "100%",
    },
    vector: {
        height: 22,
        position: "absolute",
        top: 37,
        width: 47,
    },
    img: {
        height: 40,
        position: "absolute",
        top: 15,
        width: 65,
        left: 265, // Assuming this is meant to place the img at the right of the overlap group
    },
    vector2: {
        height: 20,
        position: "absolute",
        top: 80,
        width: 40,
        left: 332, // Assuming this is meant to place the vector-2 at the right of the overlap group
    },
    conversationButton: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        position: 'absolute',
        bottom: 10, // Adjust as needed
        left: 5, // Adjust as needed
    },
    conversationButtonText: {
        color: '#2A0800',
        fontSize: 16,
        fontWeight: 'bold',
    },
    therapyTitle: {
        color: '#2A0800', // Brown color
        fontSize: 30, // Increased font size
        fontWeight: 'bold',
        textTransform: 'uppercase', // Capitalize all letters
        position: 'absolute',
        top: -150, // Adjust to move text to the top left
        left : -150, // Adjust as needed
    },
    therapySubtitle: {
        color: '#2A0800', // Brown color
        fontSize: 20, // Increased font size
        fontWeight: 'bold',
        textTransform: 'uppercase', // Capitalize all letters
        position: 'absolute',
        top: -50, // Adjust so it is below the title
        left: -150, // Adjust as needed
    },
    moodSection: {
        marginTop: 20, // Add space above the mood section
        alignItems: 'center', // Center content horizontally
        width: '100%', // Take the full width of the screen
    },
    moodButton: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        position: 'absolute',
        bottom: 20, // Adjust as needed
        left: 20, // Adjust as needed
    },
    moodButtonText: {
        color: '#2A0800',
        fontSize: 16,
        fontWeight: 'bold',
    },
    mood_overlapGroup: {
        backgroundColor: "#FFEDC1",
        borderRadius: 9.65,
        height: 289,
        position: "relative",
        width: '100%', // Set width relative to the frame
    },
    group_mood: {
        width: '200%', // Take up 100% of the .div container's width
        height: '200%', // Take up 100% of the .div container's height
        resizeMode: 'contain', // Preserve aspect ratio
        marginTop: -120, // Negative margin to move the image up within its container
        marginLeft: -90, // Negative margin to shift the image to the left
    },
    medSection: {
        marginTop: 20, // Add space above the mood section
        alignItems: 'center', // Center content horizontally
        width: '100%', // Take the full width of the screen
    },
    medButton: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        position: 'absolute',
        bottom: 20, // Adjust as needed
        left: 20, // Adjust as needed
    },
    medButtonText: {
        color: '#2A0800',
        fontSize: 16,
        fontWeight: 'bold',
    },
    med_overlapGroup: {
        backgroundColor: "#F6C1FF",
        borderRadius: 9.65,
        height: 289,
        position: "relative",
        width: '100%', // Set width relative to the frame

    },
    group_med: {
        width: '200%', // Take up 100% of the .div container's width
        height: '200%', // Take up 100% of the .div container's height
        resizeMode: 'contain', // Preserve aspect ratio
        marginTop: -120, // Negative margin to move the image up within its container
        marginLeft: -90, // Negative margin to shift the image to the left
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 60, // Set the height of the footer
        backgroundColor: '#775144', // A brown color for the footer
        justifyContent: 'center',
        alignItems: 'center',
    },




});

export default HomeScreen;
