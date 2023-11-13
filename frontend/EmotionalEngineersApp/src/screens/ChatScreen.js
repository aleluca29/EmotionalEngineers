import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Make sure to install this package

const ChatScreen = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>CHAT WITH ME</Text>
                </View>

                <View style={styles.chatContent}>

                    <View style={styles.chatBubbleUser}>
                        <Text style={styles.userLabel}>You</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="I am sad..."
                            placeholderTextColor="#000"
                            multiline
                        />
                    </View>

                    <View style={styles.chatBubbleBot}>
                        <Text style={styles.botLabel}>Chatbot</Text>
                        <Text style={styles.botText}>
                            I'm sorry to hear that you're feeling sad. Sadness is a natural emotion...
                        </Text>
                        <View style={styles.iconsContainer}>
                            <TouchableOpacity style={styles.iconButton}>
                                <Icon name="thumb-up-outline" size={20} color="#000" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconButton}>
                                <Icon name="thumb-down-outline" size={20} color="#000" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconButton}>
                                <Icon name="content-copy" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.chatBubbleBot}>
                        <Text style={styles.botLabel}>Chatbot</Text>
                        <Text style={styles.botText}>
                            Here are some pieces of advice to help you cope with sadness: {"\n"}{"\n"}
                            1. Allow Yourself to Feel{"\n"}
                            2. Talk to Someone{"\n"}
                            3. Journaling
                        </Text>
                        <View style={styles.iconsContainer}>
                            <TouchableOpacity style={styles.iconButton}>
                                <Icon name="thumb-up-outline" size={20} color="#000" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconButton}>
                                <Icon name="thumb-down-outline" size={20} color="#000" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconButton}>
                                <Icon name="content-copy" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.askBar}>
                    <TextInput
                        style={styles.askInput}
                        placeholder="Ask me anything..."
                        placeholderTextColor="#000"
                    />
                    <TouchableOpacity style={styles.sendButton}>
                        <Icon name="send" size={20} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.homeButton}>
                    <Text style={styles.homeButtonText}>Back to Home Page</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C09891',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    header: {
        marginTop: 80,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    chatContent: {
        flex: 1,
        width: '100%',
        paddingBottom: 60,
    },
    chatBubbleUser: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 20,
        marginBottom: 10,
        // Add shadow styling here
    },
    chatBubbleBot: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 20,
        marginBottom: 10,
        // Add shadow styling here
    },
    userLabel: {
        alignSelf: 'flex-start',
        marginBottom: 5,
        fontSize: 14,
        color: 'gray',
    },
    botLabel: {
        alignSelf: 'flex-start',
        marginBottom: 5,
        fontSize: 14,
        color: 'gray',
    },
    input: {
        fontSize: 18,
        color: '#000',
    },
    botText: {
        fontSize: 16,
        color: '#000',
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    iconButton: {
        marginHorizontal: 5,
    },
    askBar: {
        position: 'absolute',
        bottom: 80,
        left: 20,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 10,

    },
    askInput: {
        flex: 1,
        fontSize: 16,
        color: '#000',
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#C09891',
        borderRadius: 20,
        padding: 10,
    },
    homeButton: {
        position: 'absolute',
        bottom: 20,
        width: '90%',
        backgroundColor: '#2A0800',
        padding: 15,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeButtonText: {
        color: '#F4DBD8',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ChatScreen;
