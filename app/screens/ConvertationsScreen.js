import {
  FlatList,
  ScrollView,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ActivityItem, Screen, Text, ConvertationItem } from "../components";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";

const ACTIVITIES = [
  {
    id: 1,
    image: require("../assets/users-images/image1.png"),
    name: "Jhon Doe",
    seenActivty: false,
    activity: require("../assets/activities/activity-1.png"),
  },
  {
    id: 2,
    image: require("../assets/users-images/image2.png"),
    name: "Steve Smith",
    seenActivty: false,
    activity: require("../assets/activities/activity-2.png"),
  },
  {
    id: 3,
    image: require("../assets/users-images/image3.png"),
    name: "Jane Doe",
    seenActivty: true,
    activity: require("../assets/activities/activity-3.jpeg"),
  },
  {
    id: 4,
    image: require("../assets/users-images/image4.png"),
    name: "Richard Roe",
    seenActivty: true,
    activity: require("../assets/activities/activity-4.png"),
  },
];

const CONVERTATIONS = [
  {
    id: 1,
    image: require("../assets/users-images/image1.png"),
    name: "Steve Smith",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sint culpa eius deleniti, officiis debitis?",
    date: new Date(),
    nbrMessages: 1,
    activity: false,
    seenActivty: false,
  },
  {
    id: 2,
    image: require("../assets/users-images/image2.png"),
    name: "Jhon Doe",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    date: new Date(),
    activity: true,
    seenActivty: true,
  },
  {
    id: 3,
    image: require("../assets/users-images/image3.png"),
    name: "Jane Doe",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    date: new Date(),
    activity: true,
    seenActivty: false,
  },
  {
    id: 4,
    image: require("../assets/users-images/image4.png"),
    name: "Richard Roe",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    date: new Date(),
    nbrMessages: 1,
    activity: true,
    seenActivty: false,
  },
  {
    id: 5,
    image: require("../assets/users-images/image2.png"),
    name: "Jhon Doe",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    date: new Date(),
    activity: true,
    seenActivty: false,
  },
  {
    id: 6,
    image: require("../assets/users-images/image3.png"),
    name: "Jane Doe",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    date: new Date(),
    activity: false,
    seenActivty: false,
  },
  {
    id: 7,
    image: require("../assets/users-images/image4.png"),
    name: "Richard Roe",
    message: "Lorem ipsum dolor",
    date: new Date(),
    nbrMessages: 1,
    activity: true,
    seenActivty: false,
  },
];

export default function ConvertationsScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      {/* Begin Header */}
      <View style={styles.header}>
        {/* Begin Header Title*/}
        <Text as='header4'>Chatapp</Text>
        {/* End Header Title */}

        {/* Begin Header Options */}
        <View style={styles.headerOptions}>
          {/* Begin Search Button */}
          <TouchableOpacity style={styles.btnSearch}>
            <MaterialIcons name='search' size={34} color={colors.black} />
          </TouchableOpacity>
          {/* End Search Button */}

          {/* Begin Show Menu Button */}
          <TouchableOpacity
            style={styles.btnShowMenu}
            onPress={() => {
              console.log("click !");
              navigation.openDrawer();
            }}>
            <MaterialIcons name='menu' size={34} color={colors.black} />
          </TouchableOpacity>
          {/* End Show Menu Button */}
        </View>
        {/* End Header Options */}
      </View>
      {/* End Header */}

      {/* Begin activity Section */}
      <View style={styles.activitiesSection}>
        {/* Begin activities Section Title*/}
        <Text as='header5' style={styles.title}>
          Activities
        </Text>
        {/* End activities Section Title */}

        {/* Begin activities Section  Content*/}

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={ACTIVITIES}
          renderItem={({ item }) => (
            <ActivityItem
              navigation={navigation}
              image={item.image}
              name={item.name}
              activity={item.activity}
              seenActivty={item.seenActivty}
            />
          )}
          keyExtractor={item => item.id}
        />

        {/* End activities Section  Content */}
      </View>
      {/* End activities Section  */}

      {/* Begin Convertations Section */}
      <View style={styles.convertationSection}>
        {/* Begin Convertations Section Title*/}
        <Text as='header5' style={styles.title}>
          Messages
        </Text>
        {/* End Convertations Section Title */}

        {/* Begin Convertations Section  Content*/}

        <FlatList
          showsVerticalScrollIndicator={false}
          data={CONVERTATIONS}
          renderItem={({ item }) => (
            <ConvertationItem navigation={navigation} convertation={item} />
          )}
          keyExtractor={item => item.id}
        />

        {/* End Convertations Section  Content */}
      </View>
      {/* End Convertations Section  */}

      <TouchableOpacity style={styles.btnAdd}>
        <Ionicons name='add' size={30} color={colors.white} />
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    flex: 1,
  },
  header: {
    marginVertical: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerOptions: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginVertical: 10,
  },
  btnSearch: {
    marginRight: 15,
  },
  btnShowMenu: {
    marginRight: 5,
  },
  activitiesContent: {
    paddingVertical: 20,
  },
  convertationSection: {
    marginTop: 30,
  },
  btnAdd: {
    position: "absolute",
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
    right: 10,
  },
});
