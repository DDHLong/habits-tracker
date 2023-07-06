import { Button, ListItem, Text } from "@rneui/themed";
import { View } from "react-native";
import { cb } from "../../../utils/utils";
import Icon from "react-native-vector-icons/FontAwesome";

function SwipableList() {
  return (
    <View style={{ marginTop: 20 }}>
      <SwipableItem />
      <SwipableItem />
      <SwipableItem />
      <SwipableItem />
    </View>
  );
}

const containerStyle = {
  borderRadius: 10,
  width: "48%",
  marginBottom: 10,
};

const rightContainerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  padding: 6,
};

const buttonStyle = {
  minHeight: "100%",
};

const itemStyle = {
  backgroundColor: "#3a5f6e",
  width: "90%",
  alignSelf: "center",
  borderRadius: 10,
  marginBottom: 10,
};

const SwipableItem = () => {
  return (
    <ListItem.Swipeable
      containerStyle={itemStyle}
      leftContent={(reset) => (
        <View style={rightContainerStyle}>
          <Button
            onPress={() => reset()}
            buttonStyle={buttonStyle}
            containerStyle={containerStyle}
          >
            <Icon name="rotate-right" size={20} color="white" />
          </Button>
        </View>
      )}
      rightContent={(reset) => (
        <View style={rightContainerStyle}>
          <Button
            onPress={() => reset()}
            icon={{ name: "check", color: "white" }}
            buttonStyle={cb([buttonStyle, { backgroundColor: "green" }])}
            containerStyle={containerStyle}
          />
        </View>
      )}
    >
      <Text>📖</Text>
      <ListItem.Content>
        <ListItem.Title>Read</ListItem.Title>
        <ListItem.Subtitle>0 / 30 min</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem.Swipeable>
  );
};

export default SwipableList;
