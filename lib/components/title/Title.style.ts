import { TextStyle, StyleSheet } from "react-native";

interface Style {
  container: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    fontSize: 32,
    color: "#4287f5",
    fontWeight: "bold",
  },
});
