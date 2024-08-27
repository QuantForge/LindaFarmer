import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Heading from "../components/Heading";
import CustomButton from "../components/CustomButton";
import colors from "../assets/colors";
import SocialIcons from "../components/SocialIcons";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView className="bg-white container h-full px-7">
      <View className="mt-36">
        <Heading content="Welcome Back" />
      </View>
      <View className="mt-4">
        <TextInput
          onChangeText={setEmail}
          placeholder={"Email"}
          placeholderTextColor={colors.textDark}
          value={email}
          className="bg-zinc-200 rounded-xl py-3 pl-5"
        />
        <TextInput
          secureTextEntry={true}
          onChangeText={setPassword}
          placeholder={"Password"}
          placeholderTextColor={colors.textDark}
          value={password}
          className="bg-zinc-200 mt-3 rounded-xl py-3 pl-5"
        />
        <TouchableOpacity
          className="mt-2 flex items-end"
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text className="text-textDark font-bold">Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <CustomButton
        navigation={navigation}
        bgColor={colors.darkGreen}
        textColor={colors.textWhite}
        goto={"Dashboard"}
        content={"Login"}
      />
      <View className="mt-10">
        <Text className="text-textDark text-center">Or Continue With</Text>
        <View className="mt-2">
          <SocialIcons />
        </View>
        <View className="mt-44 flex flex-row items-center justify-center">
          <Text className="text-textDark">Don't have an Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text className="text-textDark underline font-bold" >Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;