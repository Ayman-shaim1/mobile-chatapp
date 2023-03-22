import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  TouchableOpacityBase,
} from "react-native";
import React, { useState } from "react";
import { Avatar, Button, MessageItem, Screen, TextInput } from "../components";
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";

const MESSAGES = [
  {
    incomingMessage: true,
    seen: false,
    message: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, totam debitis culpa laborum ullam ea? Esse dolorum quas consequuntur perspiciatis minus officiis explicabo nam placeat eveniet molestiae, porro quam at.`,
  },
  {
    incomingMessage: false,
    seen: false,
    message: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, totam debitis culpa laborum ullam ea? Esse dolorum quas consequuntur perspiciatis minus officiis explicabo nam placeat eveniet molestiae, porro quam at.`,
  },
  {
    incomingMessage: true,
    seen: false,
    message: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, totam debitis culpa laborum ullam ea? Esse dolorum quas consequuntur perspiciatis minus officiis explicabo nam placeat eveniet molestiae, porro quam at.`,
  },
  {
    incomingMessage: false,
    seen: false,
    message: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, totam debitis culpa laborum ullam ea? Esse dolorum quas consequuntur perspiciatis minus officiis explicabo nam placeat eveniet molestiae, porro quam at.`,
  },
  {
    incomingMessage: true,
    seen: false,
    message: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, totam debitis culpa laborum ullam ea? Esse dolorum quas consequuntur perspiciatis minus officiis explicabo nam placeat eveniet molestiae, porro quam at.`,
  },
];

const ButtonSend = ({ nMsg = true }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.primary,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginTop: 10,
      }}>
      <Ionicons name={nMsg ? "send" : "mic"} color={colors.white} size={20} />
    </TouchableOpacity>
  );
};

export default function ChatScreen({ route, navigation }) {
  const [nText, setNText] = useState(false);
  const { image, name } = route.params;

  const changeHandler = text => {
    if (text === "") setNText(false);
    else setNText(true);
  };

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
            <Ionicons name='arrow-back' size={30} color='#f4f4f4' />
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
            <Ionicons name='ellipsis-vertical' color={colors.white} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      {/* End Chat Header */}

      {/* Begin Message Content */}
      <ScrollView style={styles.messagesContent}>
        {MESSAGES.map((message, index) => (
          <MessageItem
            key={index}
            message={message.message}
            seen={message.message}
            incomingMessage={message.incomingMessage}
          />
        ))}
      </ScrollView>
      {/* End Message Content */}

      {/* Begin Send Message */}
      <View style={styles.sendMessageContainer}>
        <TextInput
          placeholder='send message ...'
          style={{ width: "60%" }}
          onChangeText={changeHandler}
        />
        <View style={styles.btnRROPContainer}>
          <TouchableOpacity style={styles.btnRROP}>
            <Ionicons name='md-attach' size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnRROP}>
            <Ionicons name='camera' size={20} />
          </TouchableOpacity>
        </View>
        <ButtonSend nMsg={nText} />
      </View>
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
    paddingBottom: 10,

  },
  headerOpl: {
    flexDirection: "row",
    alignItems: "center",
  },
  messagesContent: {
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
  sendMessageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
    borderTopWidth: 2,
    borderTopColor: "#f4f4f4",
  },
  btnRROPContainer: {
    flexDirection: "row",
    right: 10,
  },
  btnRROP: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 1,
    borderColor: "#f4f4f4",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
