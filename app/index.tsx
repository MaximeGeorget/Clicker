import { useState } from "react";
import { Text, View, Button, GestureResponderEvent } from "react-native";
import { bonus } from "@/lib/bonus";

export default function Index() {
  const [score, setScore] = useState(0);
  const [isBonusActive, setIsBonusActive] = useState(false);
  const [activeBonusList, setActiveBonusList] = useState<typeof bonus>([]);
  function whenButtonClicked(event: GestureResponderEvent) {
    const randomNumber = getRandomInt(5);
    setScore(score + 1);
    if (randomNumber === 0) {
      // addBonus();
      setIsBonusActive(true);
      setActiveBonusList([...activeBonusList, bonus[0]])
    }
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
      <Text>Le bonus est {isBonusActive ? "actif" : "inactif"}</Text>
      {activeBonusList.map((activeBonus) => {
        return (
          <Text>{activeBonus.name}</Text>
        )
      })}
    </View>
  );
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}