import { createDrawerNavigator } from "@react-navigation/drawer";
import { ProfileScreen, SettingsScreen } from "../screens";
import ChatNavigator from "./ChatNavigator";
import colors from "../config/colors";

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#f4f4f4",
        drawerActiveTintColor: colors.primary,
      }}>
      <Drawer.Screen name='Home' component={ChatNavigator} />
      <Drawer.Screen name='Profile' component={ProfileScreen} />
      <Drawer.Screen name='Settings' component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
