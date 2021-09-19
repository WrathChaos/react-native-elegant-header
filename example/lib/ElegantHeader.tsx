import React from "react";
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
/**
 * ? Local Imports
 */
import styles, { _containerGlueStyle } from "./ElegantHeader.style";
import Title, { ITitleProps } from "./components/title/Title";
import Description, {
  IDescriptionProps,
} from "./components/description/Description";
import BackButton, {
  IBackButtonProps,
} from "./components/back-button/BackButton";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IElegantHeaderProps
  extends ITitleProps,
    IDescriptionProps,
    IBackButtonProps {
  style?: CustomStyleProp;
  title: string;
  description?: string;
  TextComponent?: any;
  enableBackButton?: boolean;
  TouchableComponent?: any;
}

const ElegantHeader: React.FC<IElegantHeaderProps> = ({
  style,
  title,
  description,
  TextComponent = Text,
  enableBackButton = false,
  TouchableComponent = TouchableOpacity,
  ...rest
}) => {
  return (
    <View style={[styles.container, style]}>
      <BackButton enableBackButton={enableBackButton} {...rest} />
      <View style={_containerGlueStyle(enableBackButton)}>
        <Title title={title} {...rest} />
        <Description description={description} {...rest} />
      </View>
    </View>
  );
};

export default ElegantHeader;
