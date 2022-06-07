import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={["#52032a", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        imageStyle={styles.backGroundImage}
        resizeMode="cover"
        style={styles.rootScreen}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}
1;
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backGroundImage: {
    opacity: 0.2,
  },
});
