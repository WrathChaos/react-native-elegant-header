import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
}

export const _containerGlueStyle = (enableBackButton: boolean): ViewStyle => ({
  marginTop: enableBackButton ? 24 : 0,
});

export default StyleSheet.create<Style>({
  container: {
    marginTop: 16,
    marginLeft: 16,
  },
});
