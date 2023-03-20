import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Text from "./Text";
import Avatar from "./Avatar";
import { routes } from "../navigation";

export default function ActivityItem({
  navigation,
  image,
  name,
  seenActivty = false,
  activity,
}) {
  return (
    <View style={styles.activity}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routes.ACTIVITY, {
            activity: activity,
          });
        }}>
        <Avatar image={image} size='lg' seenActivty={seenActivty} />
      </TouchableOpacity>
      <Text style={styles.text} as='header6'>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  activity: {
    flexDirection: "column",
    marginRight: 10,
    alignItems: "center",
  },
});
