import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/UI/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie !!! ", "You know this is wrong...", [
        {
          text: "Sorry",
          style: "cancel",
        },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }
  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponents guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower ?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.flatListContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    padding: 20,
  },
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
});
export default GameScreen;
