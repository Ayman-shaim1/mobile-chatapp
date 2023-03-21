import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { Avatar, Screen } from "../components";
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";

export default function ChatScreen({ route, navigation }) {
  const { activity, image, name } = route.params;

  return (
    <Screen>
      {/* Begin Chat Header */}
      <View style={styles.header}>
        <View style={styles.headerOpl}>
          <TouchableOpacity
            style={styles.btnBack}
            variant='danger'
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons name='arrow-back' size={25} color='#f4f4f4' />
          </TouchableOpacity>

          <View style={{ marginLeft: 0 }}>
            <Avatar
              image={image}
              style={styles.headerAvatar}
              activity={false}
              size='sm'
            />
            <Text style={{ color: "#fff", fontSize: 12 }}>{name}</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <Ionicons name='options' color={colors.white} size={30} />
          </TouchableOpacity>
        </View>
      </View>
      {/* End Chat Header */}

      {/* Begin Message Content */}
      <View style={styles.messagesContent}></View>
      {/* End Message Content */}

      {/* Begin Send Message */}
      <View style={styles.messagesContent}></View>
      {/* End Send Message  */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 14,
    paddingBottom: 30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 10,
  },
  headerOpl: {
    flexDirection: "row",
    alignItems: "center",
  },
});
