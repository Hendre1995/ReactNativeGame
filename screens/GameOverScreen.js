import { View, Image, StyleSheet, Text } from "react-native";
import Colors from "../constens/colors";
import Title from "../components/UI/Title";
import PrimaryButton from "../components/UI/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game is over</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.mainText}>
        Your phone needed
        <Text style={styles.highlightText}> {roundsNumber} </Text> rounds to
        guess the number
        <Text style={styles.highlightText}> {userNumber} </Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start new Game </PrimaryButton>
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: " 100%",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  mainText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText: {
    fontWeight: "bold",
    color: Colors.primary800,
  },
});
export default GameOverScreen;
