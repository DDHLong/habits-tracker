import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Stack } from "expo-router";
import HabitForm from "../../component/Form";
import EmojiSelector, { Categories } from "react-native-emoji-selector";
import BottomSheet from "@gorhom/bottom-sheet";

const form = () => {
  // ref
  const bottomSheetRef = useRef(null);
  const [emoji, setEmoji] = useState("");
  // callbacks
  const openSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const selectEmoji = (emoji) => {
    setEmoji(emoji);
    bottomSheetRef.current?.close();
  };

  // variables
  const snapPoints = useMemo(() => ["100%"], []);

  return (
    <>
      <Stack.Screen
        options={{
          title: "NEW HABIT",
          headerStyle: {
            backgroundColor: "#204B53",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />

      <View style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1, backgroundColor: "#204B53", padding: 16 }}
        >
          <HabitForm openSheet={openSheet} emoji={emoji} />
        </ScrollView>
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
        >
          <EmojiSelector category={Categories.history} theme="#204B53" onEmojiSelected={(emoji) => selectEmoji(emoji)} />
        </BottomSheet>
      </View>
    </>
  );
};

export default form;
