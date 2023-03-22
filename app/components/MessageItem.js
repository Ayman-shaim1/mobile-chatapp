import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import { useDateDiffrence } from "../hooks";

export default function MessageItem({
  message = "",
  seen = false,
  date = new Date(),
  incomingMessage = false,
}) {
  return (
    <View
      style={[
        styles.messageItemContainer,
        {
          alignSelf: incomingMessage ? "flex-start" : "flex-end",
        },
      ]}>
      <View
        style={[
          styles.message,
          {
            backgroundColor: incomingMessage ? "#f4f4f4" : colors.primary,
          },
        ]}>
        <Text style={{ color: incomingMessage ? colors.black : colors.white }}>
          {message}
        </Text>
      </View>
      {/* <Text>{useDateDiffrence(date)}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  messageItemContainer: {
    width: "80%",
    marginVertical: 5,
    paddingHorizontal: 5,
  },
  message: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
});
