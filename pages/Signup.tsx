import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Heading from "../components/Heading";
import CustomButton from "../components/CustomButton";
import colors from "../assets/colors";
import SocialIcons from "../components/SocialIcons";

const Signup = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView className="bg-white container h-full px-7">
      <View className="mt-24">
        <Heading content="Create Account" />
      </View>
      <View className="mt-4">
        <TextInput
          onChangeText={setFirstName}
          placeholder={"First Name"}
          placeholderTextColor={colors.textDark}
          value={firstName}
          className="bg-zinc-200 text-textgray rounded-xl py-3 px-5"
        />
        <TextInput
          onChangeText={setLastName}
          placeholder={"Last Name"}
          placeholderTextColor={colors.textDark}
          value={lastName}
          className="bg-zinc-200 text-textgray mt-3 rounded-xl py-3 px-5"
          // style={{color: '#000000'}}
        />
        <TextInput
          onChangeText={setEmail}
          placeholder={"Email"}
          placeholderTextColor={colors.textDark}
          value={email}
          className="bg-zinc-200 text-textgray mt-3 rounded-xl py-3 px-5"
        />
        <TextInput
          secureTextEntry={true}
          onChangeText={setPassword}
          placeholder={"Password"}
          placeholderTextColor={colors.textDark}
          value={password}
          className="bg-zinc-200 text-textgray mt-3 rounded-xl py-3 px-5"
        />
        <TouchableOpacity
          className="mt-2 flex items-end"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-textgray font-bold">Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <CustomButton
        navigation={navigation}
        bgColor={colors.darkGreen}
        textColor={colors.textWhite}
        goto={"Login"}
        content={"Signup"}
      />
      <View className="mt-10">
        <Text className="text-textgray text-center">Or Continue With</Text>
        <View className="mt-2">
          <SocialIcons />
        </View>
        <View className="mt-24 flex flex-row items-center justify-center">
          <Text className="text-textgray">Already have an Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="text-textgray underline font-bold">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;