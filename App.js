import { StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";

export default function App() {
  return (
    <LinearGradient colors={["#52032a", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        imageStyle={styles.backGroundImage}
        resizeMode="cover"
        style={styles.rootScreen}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backGroundImage: {
    opacity: 0.2,
  },
});
