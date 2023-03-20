import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Button, Screen, TextInput } from "../components";
import { Ionicons } from "@expo/vector-icons";

export default function ActivityScreen({ route, navigation }) {
  const { activity } = route.params;
  return (
    <Screen style={styles.container}>
      <TouchableOpacity
        style={styles.btnBack}
        variant='danger'
        onPress={() => {
          navigation.goBack();
        }}>
        <Ionicons name='arrow-back' size={30} color='#f4f4f4' />
      </TouchableOpacity>
      <Image source={activity} style={styles.image} />
      <View style={styles.optionContainer}>
        <TextInput
          placeholder='enter comment ...'
          style={styles.commentInput}
        />
        <TouchableOpacity style={styles.btnLike} variant='danger'>
          <Ionicons name='heart-outline' size={18} color='#f4f4f4' />
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnBack: {
    position: "absolute",
    // backgroundColor: "red",
    top: "1%",
    left: "1%",
    width: 80,
    zIndex: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  optionContainer: {
    position: "absolute",
    bottom: "2%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  commentInput: {
    width: "80%",
    backgroundColor: "transparent",
  },
  btnLike: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignSelf: "center",
    marginLeft: "5%",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
  },
});
