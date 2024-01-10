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
  const { height } = useWindowDimensions(); // Get the window's height for responsive styling

  const handleRegister = () => {
    // Registration logic here
  };

  // Corrected navigateToLogin function
  const navigateToLogin = () => {
    navigation.navigate('Login'); // Use the correct screen name as defined in the stack navigator
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/rainbow.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={[styles.scrollViewContent, { minHeight: height }]}>
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

            {/* Register Button */}
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleRegister}
            >
              <Text style={styles.buttonText}>Register Now</Text>
            </TouchableOpacity>

            {/* Back Button */}
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={navigateToLogin}
            >
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>

          </View>

          {/* Footer with Brain Image */}
          <View style={styles.footerContainer}>
            <Image
              source={require('../../assets/brain.png')}
              style={styles.brainImage}
            />
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            {/* You can add any content you want in the footer here */}
          </View>

        </ScrollView>
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
    marginBottom: 20
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
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
     marginBottom: -200,
  },
});

export default RegisterScreen;
