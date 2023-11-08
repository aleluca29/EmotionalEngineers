import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const AvatarScreen = () => {
    const [name, setName] = useState('Rusan Ioana Madalina');
    const [dob, setDob] = useState('23/05/1995');
    const [country, setCountry] = useState('Romania');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit Profile</Text>

            <View style={styles.avatarContainer}>
                <Image source={require('../../assets/image_profile.png')} style={styles.avatar} />
                <TouchableOpacity style={styles.cameraIcon}>
                    {/* Assuming you have a camera icon asset */}
                    <Image source={require('../../assets/brrr.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Date of Birth</Text>
                <TextInput
                    style={styles.input}
                    value={dob}
                    onChangeText={setDob}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Country/Region</Text>
                <TextInput
                    style={styles.input}
                    value={country}
                    onChangeText={setCountry}
                />
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Save changes</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backButtonText}>Back to Home Page</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C09891',
        padding: 40,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#2A0800',
        textAlign: 'center',
        marginBottom: 40,
        marginTop: 20,
    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
        position: 'relative',
    },
    avatar: {
        width: 160,
        height: 160,
        borderRadius: 90,
    },
    cameraIcon: {
        position: 'absolute',
        right: 80, // half of the icon size to center it on the edge
        bottom: -16, // half of the icon size to center it on the edge
        borderRadius: 16, // half of the icon size to make it a perfect circle
        padding: 6,
    },
    icon: {
        width: 70,  // Increased size
        height: 55, // Increased size
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold', // This makes the text bold
        color: '#2A0800', // This sets the text color
        marginBottom: 5,
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        backgroundColor: 'white',
        fontSize: 16,
    },
    button: {
        paddingVertical: 15, // Increased vertical padding
        paddingHorizontal: 10, // Added horizontal padding for wider button
        backgroundColor: '#2A0800',
        borderRadius: 30, // Increased border radius for more rounded edges
        alignItems: 'center',
        justifyContent: 'center', // Center content
        marginTop: 40,
    },
    buttonText: {
        color: '#F4DBD8',
        fontSize: 18,
        fontWeight: 'bold', // Make sure the font weight is bold
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 80, // Height of the brown line
        backgroundColor: '#775144', // Brown color
        alignItems: 'center', // Center items horizontally
        justifyContent: 'center', // Center items vertically
    },
    backButton: {
        paddingVertical: 15, // Match the vertical padding of the save button
        paddingHorizontal: 30, // Match the horizontal padding of the save button
        backgroundColor: '#2A0800',
        borderRadius: 30, // Match the border radius of the save button for roundness
        borderWidth: 1,
        borderColor: '#2A0800',
    },
    backButtonText: {
        fontSize: 14, // Match the font size of the save button text
        textAlign: 'center',
        color: '#F4DBD8',
        fontWeight: 'bold', // Ensure the font weight is bold as well
    },
});

export default AvatarScreen;
