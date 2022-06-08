import { View, Image, StyleSheet, Text } from "react-native";
import Colors from "../constens/colors";
import Title from "../components/UI/Title";

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Game is over</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text> Your phone needed x rounds to guess the number y </Text>
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
});
export default GameOverScreen;
