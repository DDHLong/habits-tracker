import { View, Text, TouchableWithoutFeedback, Easing } from "react-native";
import React, { useState } from "react";
import { styled } from "nativewind";
import Collapsible from "react-native-collapsible";
import Icon from "react-native-vector-icons/FontAwesome";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const StyledView = styled(View);
const StyledAnimatedView = styled(Animated.View);
const StyledText = styled(Text);
const StyledTouchableWithoutFeedback = styled(TouchableWithoutFeedback);

const TimePicker = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const rotation = useSharedValue(0);

  const toggleCollapse = () => {
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
    rotation.value = withTiming(isCollapsed ? 0 : 180);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <>
      <StyledTouchableWithoutFeedback onPress={toggleCollapse}>
        <StyledView
          className="flex-row h-24 items-center rounded-2xl p-4"
          style={{ backgroundColor: "#0E292E" }}
        >
          <StyledView>
            <StyledText className="text-white text-lg font-bold">
              6:30
            </StyledText>
            <StyledText className="text-gray-400 font-medium text-lg">
              Reminder
            </StyledText>
          </StyledView>
          <StyledAnimatedView className="ml-auto mr-3" style={animatedStyle}>
            <Icon name="chevron-down" color={"#fff"} size={24} />
          </StyledAnimatedView>
        </StyledView>
      </StyledTouchableWithoutFeedback>
      <Collapsible collapsed={isCollapsed}>
        <StyledView
          className="flex-row h-24 items-center rounded-b-2xl p-4 w-4/5 self-center"
          style={{ backgroundColor: "#0E292E" }}
        ></StyledView>
      </Collapsible>
    </>
  );
};

export default TimePicker;
