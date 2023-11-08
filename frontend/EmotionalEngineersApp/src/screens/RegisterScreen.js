// Import the necessary modules from 'react-native'
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

const RegisterScreen = ({ navigation }) => {
    // Function to handle the registration logic
    const handleRegister = () => {
        // Replace this with your registration logic
    };

    // Function to navigate back to the Login screen
    const navigateToLogin = () => {
        // Replace this with your own navigation logic
        // Example: navigation.navigate('LoginScreen');
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.container}>
                <ImageBackground
                    source={require('../../assets/rainbow.png')}
                    style={styles.backgroundImage}
                >
                    <View style={styles.overlayContainer}>
                        <Text style={styles.titleText}>REGISTER</Text>

                        {/* Email Input */}
                        <View style={styles.inputContainer}>
                            <Image
                                source={require('../../assets/icon_email.png')}
                                style={styles.icon}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="EMAIL"
                                placeholderTextColor="#6f4e37"
                                keyboardType="email-address"
                            />
                        </View>

                        {/* Password Input */}
                        <View style={styles.inputContainer}>
                            <Image
                                source={require('../../assets/icon_password.png')}
                                style={styles.icon}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="PASSWORD"
                                placeholderTextColor="#6f4e37"
                                secureTextEntry
                            />
                        </View>

                        {/* Confirm Password Input */}
                        <View style={styles.inputContainer}>
                            <Image
                                source={require('../../assets/icon_password.png')}
                                style={styles.icon}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="CONFIRM PASSWORD"
                                placeholderTextColor="#6f4e37"
                                secureTextEntry
                            />
                        </View>

                    </View>
                    <View style={styles.fixedContainer}>
                        {/* Register Button */}
                        <TouchableOpacity style={styles.buttonContainer} onPress={handleRegister}>
                            <Text style={styles.buttonText}>Register Now</Text>
                        </TouchableOpacity>

                        {/* Back Button */}
                        <TouchableOpacity style={styles.backButtonContainer} onPress={navigateToLogin}>
                            <Text style={styles.backButtonText}>Back</Text>
                        </TouchableOpacity>

                        {/* Brain Image */}
                        <Image
                            source={require('../../assets/brain.png')}
                            style={styles.brainImage}
                        />
                    </View>
                </ImageBackground>
                {/* Footer */}
                <View style={styles.footer}>
                    {/* You can add any content you want in the footer here */}
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C09891',
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    overlayContainer: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        padding: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#2A0800',
        borderRadius: 5,
        marginTop: 150,

    },
    titleText: {
        fontSize: 28,
        color: '#2A0800',
        fontWeight: 'bold',
        marginBottom: 50,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#2A0800',
        color: '#2A0800',
        paddingHorizontal: 0,
        marginHorizontal: 10,
        textTransform: 'uppercase', // This will capitalize the placeholder
    },
    buttonContainer: {
        // Update the styles if necessary to match the REGISTER button in your design
        backgroundColor: '#2A0800', // Change the color to match your design
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: '60%',
        alignSelf: 'center',
        marginBottom: 250, // Adjust as needed for spacing
    },
    buttonText: {
        // Update the styles if necessary to match the REGISTER button in your design
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#F4DBD8', // Use the provided pinkish color
    },
    backButtonContainer: {
        backgroundColor: '#2A0800', // Match the register button's background color
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: '30%', // Adjusted width
        alignSelf: 'center',
        position: 'absolute',
        bottom: 200, // Adjust this as needed for your layout
    },
    backButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#F4DBD8', // Match the register button's text color
    },
    registerContainer: {
        marginTop: 20,
        alignSelf: 'flex-end', // Align the register container to the right
        paddingRight: 0, // Adjust the padding to move text more to the right
    },
    registerText: {
        fontSize: 14,
        color: '#2A0800',

    },
    registerLink: {
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginTop: 5,

    },
    brainImage: {
        position: 'absolute',
        bottom: 60,
        right: 40,
        width: 170,
        height: 170,
        resizeMode: 'contain',
    },
    fixedContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        // Adjust padding or margin as necessary to position your elements
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

export default RegisterScreen;
