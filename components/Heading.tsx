import { Text } from "react-native";
import React from "react";

export default function Heading(props) {
  return (
    <Text className="text-textDark text-2xl font-bold">
      {props.content}
    </Text>
  );
}