import { useEffect, useState } from "react";
import { Text, View, Button, GestureResponderEvent, TouchableOpacity } from "react-native";
import { bonus } from "@/lib/bonus";

export default function Index() {
  const [clicks, setClicks] = useState(0);
  const [score, setScore] = useState(0);
  const [scoredLastClick, setScoredLastClick] = useState(0);
  const [averageScorePerClick, setAverageScorePerClick] = useState(0);
  const [bestScored, setBestScored] = useState(0);
  const [maxBonusNumber, setMaxBonusNumber] = useState(5);
  const [bonusNumber, setBonusNumber] = useState(0);
  const [activeBonusList, setActiveBonusList] = useState<typeof bonus>([]);

  function calculateScore(actualScore: number) {
    let newScore = 1;
    for (let i = 0; i < activeBonusList.length; i++) {
      let bonusScoreModificatorParam = {
        score: newScore,
        clicks: clicks,
      }
      newScore = Math.round((activeBonusList[i].scoreModificator(bonusScoreModificatorParam) + Number.EPSILON) * 100) / 100;
    };
    setScoredLastClick(newScore);
    if (newScore > bestScored) {
      setBestScored(newScore);
    };
    newScore = newScore + actualScore;
    return newScore
  }

  function whenButtonClicked(event: GestureResponderEvent) {
    const randomNumber = getRandomInt(5);
    setClicks((previousClicks) => {
      return previousClicks + 1;
    });
    setScore(Math.round((calculateScore(score) + Number.EPSILON) * 100) / 100);
    if (randomNumber === 0 && bonusNumber < maxBonusNumber) {
      // setActiveBonusList([...activeBonusList, bonus[getRandomInt(bonus.length)]]);
      setActiveBonusList((previousActiveBonusList) => {
        return [...previousActiveBonusList, bonus[getRandomInt(bonus.length)]]
      });
      setBonusNumber((previousBonusNumber) => {
        return previousBonusNumber + 1;
      });
    }
  }

  useEffect(() => {
    if (clicks === 0) {
      setAverageScorePerClick(0);
    }
    else {
      setAverageScorePerClick(Math.round(((score / clicks) + Number.EPSILON) * 100) / 100);
    }
  }, [score, clicks]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Clicks : {clicks}</Text>
      <Text>Score : {score}</Text>
      <Text>Scored last click : {scoredLastClick}</Text>
      <Text>Average scored per click : {averageScorePerClick}</Text>
      <Text>Best scored in one click : {bestScored}</Text>
      <Button title="Bouton" onPress={whenButtonClicked}></Button>
      <Text>Bonus : {bonusNumber}/{maxBonusNumber}</Text>
      {/* <Text>Le bonus est {isBonusActive ? "actif" : "inactif"}</Text> */}
      {activeBonusList.map((activeBonus) => {
        let k = activeBonusList.length + 1;
        return (
          <TouchableOpacity>
            <Text>{activeBonus.name}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  );
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}