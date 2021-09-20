import * as React from "react";
import {
  TouchableOpacity,
  Image,
  StyleProp,
  TouchableOpacityProps,
  ImageSourcePropType,
  ImageStyle,
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./BackButton.style";

type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

export interface IBackButtonProps extends TouchableOpacityProps {
  TouchableComponent?: any;
  enableBackButton?: boolean;
  backIconSource?: ImageSourcePropType;
  backButtonImageStyle?: CustomImageStyleProp;
}

const BackButton: React.FC<IBackButtonProps> = ({
  TouchableComponent = TouchableOpacity,
  backIconSource = require("../../local-assets/left-arrow.png"),
  backButtonImageStyle,
  enableBackButton = false,
  ...rest
}) => {
  return enableBackButton ? (
    <TouchableComponent {...rest}>
      <Image
        source={backIconSource}
        style={[styles.imageStyle, backButtonImageStyle]}
      />
    </TouchableComponent>
  ) : null;
};

export default BackButton;
