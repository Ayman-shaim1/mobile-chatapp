import { useCallback } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { ConvertationsScreen } from "./app/screens";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app/navigation/";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Lato-Black": require("./app/assets/fonts/Lato/Lato-Black.ttf"),
    "Lato-Regular": require("./app/assets/fonts/Lato/Lato-Regular.ttf"),
    "Lato-Light": require("./app/assets/fonts/Lato/Lato-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </View>
  );
}
