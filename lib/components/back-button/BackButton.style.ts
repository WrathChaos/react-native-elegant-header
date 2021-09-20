import { ImageStyle, StyleSheet } from "react-native";

interface Style {
  imageStyle: ImageStyle;
}

export default StyleSheet.create<Style>({
  imageStyle: {
    width: 25,
    height: 25,
    tintColor: "#3b5278",
  },
});
