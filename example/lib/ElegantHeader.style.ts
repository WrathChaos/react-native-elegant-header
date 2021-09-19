import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    marginTop: 16,
    marginLeft: 16,
  },
});
