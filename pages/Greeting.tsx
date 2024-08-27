import { View, Text, TouchableOpacity, Image } from "react-native";
import Heading from "../components/Heading";
import colors from "../assets/colors";
import CustomButton from "../components/CustomButton";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

const Greeting = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-white container h-full px-7">
       <View className="flex justify-center items-center mt-24">
        <Image
          source={require('./../assets/hero.png')}
          style={{width: 500, height: 292}}
        />
      </View>
      <Heading content="Welcome to LindaFarmer" />

      <View className="mt-6">
        <TouchableOpacity
          className="mt-3 rounded-xl py-3"
          style={{ elevation: 1, backgroundColor: colors.bgGray }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            className="text-center text-base"
            style={{ color: colors.textDark }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <CustomButton
          navigation={navigation}
          bgColor={colors.bgGray}
          textColor={colors.textDark}
          goto={"Signup"}
          content={"Sign up"}
        />
      </View>
    </SafeAreaView>
  );
};
export default Greeting;