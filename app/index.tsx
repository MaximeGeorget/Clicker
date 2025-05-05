import { useState } from "react";
import { Text, View, Button, GestureResponderEvent } from "react-native";

export default function Index() {
  const [score, setScore] = useState(0);
  function whenButtonClicked(coucou: GestureResponderEvent) {
    setScore(score + 1);
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Le score est : {score}</Text>
      <Button title="Bouton" onPress={whenButtonClicked}></Button>
    </View>
  );
}