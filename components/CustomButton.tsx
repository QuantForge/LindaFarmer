import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      className="mt-3 rounded-xl py-3"
      style={{ elevation: 1, backgroundColor: props.bgColor }}
      onPress={() => {
        // kwanza call the onPress handler
        if (props.onPress) {
          props.onPress(); // Handle the custom logic, e.g., sending the password reset link
        }

        // handle navigation if a `goto` prop is provided
        if (props.goto) {
          props.navigation.navigate(props.goto);
        }
      }}
    >
      <Text
        className="text-center text-base"
        style={{ color: props.textColor }}
      >
        {props.content}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
