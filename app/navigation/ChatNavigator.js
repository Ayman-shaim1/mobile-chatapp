import { createStackNavigator } from "@react-navigation/stack";
import { ConvertationsScreen, ChatScreen, ActivityScreen } from "../screens";

const Stack = createStackNavigator();
export default function ChatNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='Convertations' component={ConvertationsScreen} />
      <Stack.Screen name='Chat' component={ChatScreen} />
      <Stack.Screen name='Activity' component={ActivityScreen} />
    </Stack.Navigator>
  );
}
