import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useWindowDimensions } from 'react-native';

const AvatarScreen = () => {
  const [name, setName] = useState('Ana Pop');
  const [dob, setDob] = useState('23/05/1995');
  const [country, setCountry] = useState('Romania');
  const [avatar, setAvatar] = useState(require('../../assets/defaultavatar.png'));

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    requestMediaLibraryPermissions();
  }, []);

  const requestMediaLibraryPermissions = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setAvatar({ uri: result.uri });
    }
  };

  return (
    <View style={[styles.container, { width, height }]}>
      <Text style={styles.title}>Edit Profile</Text>

      <View style={styles.avatarContainer}>
        <Image source={avatar} style={styles.avatar} />
        <TouchableOpacity style={styles.cameraIcon} onPress={pickImage}>
          <Image source={require('../../assets/camera.png')} style={styles.icon} />
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2A0800',
    textAlign: 'center',
    marginBottom: 40,
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
    borderRadius: 80,
  },
  cameraIcon: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
  },
  icon: {
    width: 32,
    height: 32,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2A0800',
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
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#2A0800',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    marginTop: 40,
  },
  buttonText: {
    color: '#F4DBD8',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#775144',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  backButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#2A0800',
    borderRadius: 30,
  },
  backButtonText: {
    fontSize: 14,
    color: '#F4DBD8',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AvatarScreen;
