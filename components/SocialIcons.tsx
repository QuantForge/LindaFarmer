import { View, TouchableOpacity, Image } from "react-native";
import React from "react";

const SocialIcons = () => {
  return (
    <View className="flex flex-row items-center justify-center">
      <TouchableOpacity className="bg-zinc-200 mx-2 rounded-lg px-16 py-2">
        <Image
          source={require("./../assets/google.png")}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
      <TouchableOpacity className="bg-zinc-200 mx-2 rounded-lg px-16 py-2">
        <Image
          source={require("./../assets/apple.png")}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SocialIcons;