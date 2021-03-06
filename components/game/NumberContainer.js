import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constens/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontWeight: "bold",
    color: Colors.accent500,
    fontSize: 36,
  },
});
export default NumberContainer;
