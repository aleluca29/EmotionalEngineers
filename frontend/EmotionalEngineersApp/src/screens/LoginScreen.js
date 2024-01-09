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
    ScrollView,
    Platform,
    useWindowDimensions,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
    const { width } = useWindowDimensions(); // Hooks API for real-time dimensions

    // Function to handle the navigation to the Register screen
    const navigateToRegister = () => {
        navigation.navigate('RegisterScreen');
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        >
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
                <ImageBackground
                    source={require('../../assets/rainbow.png')}
                    style={[styles.backgroundImage, { width }]} // Apply the dynamic width here
                    resizeMode="cover"
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
                            <TouchableOpacity onPress={navigateToRegister}>
                                <Text style={styles.registerLink}>
                                    Register now
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.fixedContainer}>
                        {/* Login Button */}
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => {/* Logic to handle login */}}>
                            <Text style={styles.buttonText}>Log in</Text>
                        </TouchableOpacity>

                        {/* Brain Image */}
                        <Image
                            source={require('../../assets/brain.png')}
                            style={styles.brainImage}
                        />
                    </View>
                </ImageBackground>
                <View style={styles.footer}>
                    {/* You can add any content you want in the footer here */}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C09891',
    },
    scrollView: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
    },
    overlayContainer: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        padding: 20,
        alignItems: 'center',
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
    },
    buttonContainer: {
        backgroundColor: '#2A0800',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: '60%',
        alignSelf: 'center',
        marginBottom: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: '#F4DBD8',
        fontWeight: 'bold',
        fontSize: 18, // Consider using a scaling library for different screen sizes
    },
    registerContainer: {
        alignSelf: 'center',
    },
    registerText: {
        color: '#2A0800',
        fontSize: 14, // Consider using a scaling library for different screen sizes
    },
    registerLink: {
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginTop: 5,
    },
    brainImage: {
        marginTop: 20,
        width: 170,
        height: 170,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    fixedContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    footer: {
        height: 60,
        backgroundColor: '#775144',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoginScreen;
