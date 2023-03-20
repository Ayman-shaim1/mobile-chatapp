import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Avatar from "./Avatar";
import Text from "./Text";
import { useMinimize, useDateDiffrence } from "../hooks";
import colors from "../config/colors";
import { routes } from "../navigation";

export default function ConvertationItem({
  navigation,
  convertation,
  activity = false,
  seenActivty = false,
}) {
  return (
    <TouchableOpacity
      style={styles.convertation}
      onPress={() => {
        navigation.navigate(routes.CHAT);
      }}>
      <Avatar
        image={convertation.image}
        size='md'
        activity={activity}
        seenActivty={seenActivty}
      />
      <View style={styles.convertationText}>
        <Text as='header5'>{convertation.name}</Text>
        <Text style={styles.message}>
          {useMinimize(convertation.message, 60)}
        </Text>
      </View>
      <View style={styles.convertationOp}>
        <Text style={styles.convertationDate}>
          {useDateDiffrence(convertation.date)}
        </Text>
        {convertation.nbrMessages && (
          <View style={styles.convertationNbrMsgBadge}>
            <Text style={styles.convertationNbrMsgText}>
              {convertation.nbrMessages}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {},
  convertation: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
  },
  convertationText: {
    marginLeft: 10,
    width: "65%",
  },
  message: {
    color: "gray",
    fontWeight: "600",
  },
  convertationOp: {
    justifyContent: "center",
    alignItems: "center",
  },
  convertationDate: {
    color: colors.primary,
  },
  convertationNbrMsgBadge: {
    width: 25,
    height: 25,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  convertationNbrMsgText: {
    color: colors.white,
    fontWeight: "bold",
  },
});
