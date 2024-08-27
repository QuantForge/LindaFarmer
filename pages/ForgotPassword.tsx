import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Alert, StyleSheet, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Heading from "../components/Heading";
import CustomButton from "../components/CustomButton";
import colors from "../assets/colors";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await fetch('https://backend-api.com/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.ok) {
        Alert.alert('Success', 'Check your email for the reset link.');
      } else {
        Alert.alert('Error', 'Something went wrong.');
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to connect. Please try again later.');
    }
  };
  

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text style={{ color: colors.textDark, fontSize: 24, marginBottom: 20 }}>Forgot Password</Text>
      
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{
          width: "100%",  // Adjust width as needed
          backgroundColor: "#E2E8F0",  // bg-zinc-200 equivalent
          color: "#A0AEC0",  // text-textgray equivalent
          borderRadius: 15,  // rounded-xl equivalent
          paddingVertical: 12,  // py-3 equivalent
          paddingHorizontal: 20,  // px-5 equivalent
          marginBottom: 20,  // Spacing between input and button
        }}
      />

      <CustomButton
        navigation={navigation}
        bgColor={colors.darkGreen}
        textColor={colors.textWhite}
        onPress={handleForgotPassword}  // Ensure t triggers the function
        content={"Send Reset Link"}
      />
    </View>
  );
};

export default ForgotPassword;