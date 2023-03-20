import { Image, StyleSheet, View } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function Avatar({
  image,
  size = "md",
  activity = true,
  seenActivty = false,
}) {
  return (
    <>
      <View
        style={[
          size === "md" ? styles.activityCircle : styles.activityCircleLg,
          activity && {
            borderWidth: 2,
          },
          seenActivty
            ? {
                borderColor: "lightgray",
              }
            : { borderColor: colors.primary },
        ]}>
        <Image
          source={image}
          style={size === "md" ? styles.avatar : styles.avatarLg}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  activityCircle: {
    padding: 3,
    borderRadius: 40,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 25.5,
    borderColor: "#f4f4f4",
    borderWidth: 1,
  },
  activityCircleLg: {
    padding: 5,
    borderRadius: 40,
  },
  avatarLg: {
    width: 70,
    height: 70,
    borderRadius: 37.5,
    borderColor: "#f4f4f4",
    borderWidth: 1,
  },
});
