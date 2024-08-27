import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import { API_URL, API_KEY } from '@env';

const Dashboard = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    // Request permission to access the device's location
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      // Get the current location
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);

      // Fetch weather data based on the location
      if (loc) {
        fetchWeather(loc.coords.latitude, loc.coords.longitude);
      }
    })();
  }, []);

  // Function to fetch weather data
  const fetchWeather = async (latitude, longitude) => {
    try {
      const API_KEY = `${API_KEY}`; // weather API key
      const response = await axios.get(
        `${API_URL}`
      );
      setWeather(response.data);
    } catch (error) {
      setErrorMsg('Unable to fetch weather data');
    }
  };

  return (
    <ImageBackground
      source={require('./../assets/dashboard.jpg')}
      style={{ height: 400, justifyContent: 'flex-end', padding: 16, paddingBottom: 20 }}
      imageStyle={{ borderRadius: 16 }}
    >
    <View>
    {location && weather && (
    <View style={{ marginTop: 16 }}>
      <Text style={{ color: '#FFFFFF', fontSize: 18 }}>
        {`Welcome! You're in ${weather.name}`}
      </Text>
      <Text style={{ color: '#FFFFFF', fontSize: 18, marginTop: 8 }}>
        {`Current Temperature: ${weather.main.temp}°C`}
      </Text>
      <Text style={{ color: '#FFFFFF', fontSize: 16, marginTop: 4 }}>
        {`Weather: ${weather.weather[0].description}`}
      </Text>
    </View>
  )}
  {errorMsg && (
    <Text style={{ color: '#FF0000', marginTop: 8 }}>{errorMsg}</Text>
  )}
</View>
    </ImageBackground>

  );
};

export default Dashboard;
