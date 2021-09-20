import * as React from "react";
import { StyleProp, Text, TextStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./Title.style";

type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

export interface ITitleProps {
  title: string;
  titleTextStyle?: CustomTextStyleProp;
  TextComponent?: any;
}

const Title: React.FC<ITitleProps> = ({
  title,
  titleTextStyle,
  TextComponent = Text,
}) => {
  return (
    <TextComponent style={[styles.container, titleTextStyle]}>
      {title}
    </TextComponent>
  );
};

export default Title;
