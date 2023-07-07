import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  withTiming,
  Easing,
} from "react-native-reanimated";

import Icon from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.9;
const BUTTON_WIDTH = width * 0.15;
const RIGHT_BUTTONS = 3;

const timing = {
  duration: 500,
  easing: Easing.bezier(0.25, 0.1, 0.25, 1),
};

const SwipeableCard = () => {
  const translationX = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translationX.value;
    },
    onActive: (event, ctx) => {
      translationX.value = ctx.startX + event.translationX;
    },
    onEnd: (event) => {
      if (event.translationX < -BUTTON_WIDTH) {
        // Swipe left detected, reveal buttons
        translationX.value = withTiming(
          -BUTTON_WIDTH * RIGHT_BUTTONS - 10,
          timing
        );
      } else if (event.translationX > BUTTON_WIDTH) {
        // Swipe right detected, reveal buttons
        translationX.value = withTiming(BUTTON_WIDTH + 10, timing);
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
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.buttonContainer,
          styles.leftButtonContainer,
          buttonContainerLeftStyle,
        ]}
      >
        <TouchableOpacity style={styles.button}>
          <Icon name="refresh" size={20} color="white" />
        </TouchableOpacity>
      </Animated.View>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.card, cardStyle]}>
          <Text>Card Content</Text>
        </Animated.View>
      </PanGestureHandler>
      <Animated.View
        style={[
          styles.buttonContainer,
          styles.rightButtonContainer,
          buttonContainerStyle,
        ]}
      >
        <TouchableOpacity style={styles.button}>
          <Icon name="pencil" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="trash" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="check" size={20} color="white" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default SwipeableCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    height: 80,
  },
  buttonContainer: {
    flexDirection: "row",
    position: "absolute",
    marginTop: 16,
  },
  leftButtonContainer: {
    left: 0,
  },
  rightButtonContainer: {
    right: 0,
  },
  button: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginHorizontal: 4,
    height: CARD_WIDTH * 0.5 * 0.25,
  },
});
