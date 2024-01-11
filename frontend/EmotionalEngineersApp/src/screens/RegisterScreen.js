import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();

  const handleRegister = () => {
    // Handle the registration logic
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/rainbow.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={[styles.scrollViewContent, { paddingBottom: height * 0.1 }]}>
          <View style={styles.overlayContainer}>
            <Text style={styles.titleText}>REGISTER</Text>
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
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleRegister}
          >
            <Text style={styles.buttonText}>Register Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={navigateToLogin}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <View style={styles.brainContainer}>
            <Image
              source={require('../../assets/brain.png')}
              style={styles.brainImage}
            />
          </View>
        </ScrollView>
        <View style={styles.footer}>
          {/* Footer content if needed */}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C09891',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  overlayContainer: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
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
    borderBottomWidth: 1,
    borderBottomColor: '#2A0800',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
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
    fontSize: 18,
  },
  brainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 20, // Adjust this value as needed to create space above the footer
  },
  brainImage: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  footer: {
    height: 60,
    backgroundColor: '#775144',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default RegisterScreen;
