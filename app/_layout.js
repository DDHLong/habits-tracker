import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

function Layout() {
  return (
    <SafeAreaProvider>
      <Stack />
    </SafeAreaProvider>
  );
}

export default Layout;
