import { ViewStyle, StyleSheet, Dimensions, TextStyle } from "react-native";

const { width: ScreenWidth } = Dimensions.get("screen");

interface Style {
  container: ViewStyle;
  textStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    marginTop: 8,
    width: ScreenWidth * 0.9,
  },
  textStyle: {
    lineHeight: 20,
    color: "#a3a3a3",
  },
});
