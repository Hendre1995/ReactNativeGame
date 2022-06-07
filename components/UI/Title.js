import { Text, StyleSheet } from "react-native";
import Colors from "../../constens/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderColor: "white",
    borderWidth: 2,
    padding: 12,
  },
});
export default Title;
