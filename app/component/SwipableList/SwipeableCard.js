import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolate,
  withTiming,
  Easing,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.9;
const BUTTON_WIDTH = width * 0.15;
const RIGHT_BUTTONS = 3;

const buttonStyle = {
  flex: 1,
  backgroundColor: "lightblue",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 8,
  marginHorizontal: 4,
  height: CARD_WIDTH * 0.5 * 0.25,
};

const timing = {
  duration: 500,
  easing: Easing.bezier(0.25, 0.1, 0.25, 1),
};

const CardComponent = () => {
  const translationX = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translationX.value;
    },
    onActive: (event, ctx) => {
      translationX.value = ctx.startX + event.translationX;
    },
    onEnd: (event) => {
      if (event.translationX < (-BUTTON_WIDTH * RIGHT_BUTTONS) / 2) {
        // Swipe left detected, reveal buttons
        translationX.value = withTiming(-BUTTON_WIDTH * RIGHT_BUTTONS, timing);
      } else if (event.translationX > BUTTON_WIDTH) {
        // Swipe right detected, reveal buttons
        translationX.value = withTiming(BUTTON_WIDTH, timing);
      } else {
        // No swipe or swipe not enough, reset position
        translationX.value = withTiming(0, timing);
      }
    },
  });

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translationX.value }],
      width: CARD_WIDTH,
    };
  });

  const buttonContainerLeftStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            translationX.value,
            [0, BUTTON_WIDTH],
            [-BUTTON_WIDTH, 0]
          ),
        },
      ],
      width: BUTTON_WIDTH,
    };
  });

  const buttonContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            translationX.value,
            [0, -BUTTON_WIDTH * RIGHT_BUTTONS],
            [BUTTON_WIDTH * RIGHT_BUTTONS, 0]
          ),
        },
      ],
      width: BUTTON_WIDTH * RIGHT_BUTTONS,
    };
  });

  return (
    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
      <Animated.View
        style={[
          {
            flexDirection: "row",
            position: "absolute",
            left: 0,
            marginTop: 16,
          },
          buttonContainerLeftStyle,
        ]}
      >
        <TouchableOpacity style={buttonStyle}>
          <Text>Button 1</Text>
        </TouchableOpacity>
      </Animated.View>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[
            { backgroundColor: "white", padding: 16, borderRadius: 8 },
            cardStyle,
          ]}
        >
          <Text>Card Content</Text>
        </Animated.View>
      </PanGestureHandler>
      <Animated.View
        style={[
          {
            flexDirection: "row",
            position: "absolute",
            right: 0,
            marginTop: 16,
          },
          buttonContainerStyle,
        ]}
      >
        <TouchableOpacity style={buttonStyle}>
          <Text>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyle}>
          <Text>Button 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyle}>
          <Text>Button 3</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default CardComponent;
