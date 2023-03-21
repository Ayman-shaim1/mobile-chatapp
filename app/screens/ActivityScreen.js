import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Avatar, Screen, Text, TextInput } from "../components";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function ActivityScreen({ route, navigation }) {
  const { activity, image, name } = route.params;
  return (
    <Screen style={styles.container}>
      <View style={styles.nbrActivity}>
        <View style={styles.activityItem}></View>
        <View style={styles.activityItem}></View>
        <View style={styles.activityItem}></View>
        <View style={styles.activityItem}></View>
        <View style={styles.activityItem}></View>
        <View style={styles.activityItem}></View>
      </View>
      <View style={styles.activityHeader}>
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
      <View style={styles.imageContainer}>
        <View style={styles.btnsNxtPrvContainer}>
          <TouchableOpacity style={styles.btnsNxtPrv}>
            <Ionicons name='arrow-back' size={20} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnsNxtPrv}>
            <Ionicons name='arrow-forward' size={20} color={colors.white} />
          </TouchableOpacity>
        </View>
        <Image source={activity} style={styles.image} />
      </View>
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
    backgroundColor: "gray",
  },
  nbrActivity: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  activityItem: {
    backgroundColor: colors.white,
    height: 2,
    borderRadius: 2,
    marginHorizontal: 2,
    flex: 1,
  },
  activityHeader: {
    flexDirection: "row",
    marginLeft: 10,
    alignItems: "center",
    borderBottomColor: colors.white,
    paddingBottom: 10,
  },
  btnBack: {
    // backgroundColor: "red",
    width: 30,
    zIndex: 100,
  },
  imageContainer: {
    marginTop: "5%",
    width: "90%",
    height: "60%",
    alignSelf: "center",
    borderRadius: 7,
    position: "relative",
  },
  btnsNxtPrvContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    zIndex: 100,
    top: "50%",
    paddingHorizontal: 10,
  },
  btnsNxtPrv: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 7,
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
