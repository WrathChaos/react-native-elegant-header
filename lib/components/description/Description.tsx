import React from "react";
import { View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./Description.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

export interface IDescriptionProps {
  description?: string;
  TextComponent?: any;
  descriptionTextStyle?: CustomTextStyleProp;
  descriptionContainerStyle?: CustomStyleProp;
}

const Description: React.FC<IDescriptionProps> = ({
  description,
  descriptionTextStyle,
  descriptionContainerStyle,
  TextComponent = Text,
}) => {
  return description ? (
    <View style={[styles.container, descriptionContainerStyle]}>
      <TextComponent style={[styles.textStyle, descriptionTextStyle]}>
        {description}
      </TextComponent>
    </View>
  ) : null;
};

export default Description;
