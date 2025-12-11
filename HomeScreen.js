import React from "react";
import { View, Text, Button } from "react-native";
import { logout } from "./authFunctions";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Home Screen!</Text>
      <Button
        title="Logout"
        onPress={async () => {
          await logout();
          navigation.replace("Auth");
        }}
      />
    </View>
  );
}
