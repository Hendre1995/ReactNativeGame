import { Text, StyleSheet } from "react-native";
import Colors from "../../constens/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderColor: Colors.accent500,
    borderWidth: 2,
    padding: 12,
  },
});
export default Title;
