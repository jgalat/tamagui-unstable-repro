import React from "react";
import { YStack, Button, Text } from "tamagui";

export default function index() {
  const [s, ss] = React.useState(0);
  const c = () => ss(s + 1);
  const al = () => alert("This is an alert!");
  return (
    <YStack flex={1} justifyContent="center" p={16} space={32}>
      <Text textAlign="center" fontSize={32} fontWeight="700">
        {s}
      </Text>
      <Button onPress={c}>Increase</Button>
      <Button onPress={al}>Alert!</Button>
    </YStack>
  );
}
