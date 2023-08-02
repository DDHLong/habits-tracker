import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack, useRootNavigationState, useRouter, useSegments } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { pb } from "../libs/pocketbase";
import { useEffect } from "react";

const queryClient = new QueryClient();

function Layout() {
  const segments = useSegments();
  const router = useRouter();

  const isValid = pb.authStore.isValid;

  const navigationState = useRootNavigationState();

  useEffect(() => {
    if (!navigationState?.key) return;
    const inAuthGroup = segments[0] === "(auth)";

    if (!isValid && !inAuthGroup) {
      router.replace("/signIn");
    } else if (isValid && inAuthGroup) {
      router.replace("/home");
    }
  }, [isValid, segments, navigationState?.key]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
        </SafeAreaProvider>
      </QueryClientProvider>
    </>
  );
}

export default Layout;
