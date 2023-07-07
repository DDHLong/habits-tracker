import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          tabBarLabelStyle: { display: "none" },
          title: "",
        }}
      />
      <Tabs.Screen
        name="form"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus" color={color} size={size} />
          ),
          tabBarLabelStyle: { display: "none" },
          title: "",
        }}
      />
    </Tabs>
  );
};
