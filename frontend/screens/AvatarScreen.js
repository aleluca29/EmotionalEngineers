
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const AvatarScreen = () => {
    const [name, setName] = useState('Rusan Ioana Madalina');
    const [dob, setDob] = useState('23/05/1995');
    const [country, setCountry] = useState('Romania');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit Profile</Text>
            <Image source={require('./assets/images/avatar6.png')} style={styles.avatar} />
            <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" />
            <TextInput style={styles.input} value={dob} onChangeText={setDob} placeholder="Date of Birth" />
            <TextInput style={styles.input} value={country} onChangeText={setCountry} placeholder="Country/Region" />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Save changes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton}>
                <Text style={styles.backButtonText}>Back to Home Page</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#C09891',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        marginBottom: 20,
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: 'white',
    },
    button: {
        padding: 15,
        backgroundColor: '#8B4513',
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
    },
    backButton: {
        marginTop: 20,
    },
    backButtonText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#8B4513',
    },
});

export default AvatarScreen;