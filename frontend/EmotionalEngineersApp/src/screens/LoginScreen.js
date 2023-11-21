import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ImageBackground,
    Pressable,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
    // Function to handle the navigation to the Register screen
    const navigateToRegister = () => {
        // Replace this with your own navigation logic
        // Example: navigation.navigate('RegisterScreen');
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
                        <Text style={styles.titleText}>LOG IN</Text>

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

                        {/* Register Prompt */}
                        <View style={styles.registerContainer}>
                            <Text style={styles.registerText}>
                                Don't you have an account yet?
                            </Text>
                            <Pressable onPress={navigateToRegister}>
                                <Text style={styles.registerLink}>
                                    Register now
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.fixedContainer}>
                        {/* Login Button */}
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => { /* Logic to handle login */ }}>
                            <Text style={styles.buttonText}>Log in</Text>
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
        backgroundColor: '#2A0800',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: '60%',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 300,
    },
    buttonText: {

        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#F4DBD8',
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

export default LoginScreen;