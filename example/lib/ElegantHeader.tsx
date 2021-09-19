import React from "react";
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  Dimensions,
  TouchableOpacity,
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./ElegantHeader.style";
import Title, { ITitleProps } from "./components/title/Title";

const { width: ScreenWidth } = Dimensions.get("window");

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IElegantHeaderProps extends ITitleProps {
  style?: CustomStyleProp;
  title: string;
  description?: string;
  TextComponent?: any;
  TouchableComponent?: any;
}

const ElegantHeader: React.FC<IElegantHeaderProps> = ({
  style,
  title,
  description,
  TextComponent = Text,
  TouchableComponent = TouchableOpacity,
  ...rest
}) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableComponent>
        <Image
          source={require("./local-assets/left-arrow.png")}
          style={{ height: 25, width: 25, tintColor: "#3b5278" }}
        />
      </TouchableComponent>
      <View style={{ marginTop: 24 }}>
        <Title title={title} {...rest} />
        {description && (
          <View style={{ marginTop: 8, width: ScreenWidth * 0.9 }}>
            <TextComponent style={{ color: "#a3a3a3", lineHeight: 20 }}>
              {description}
            </TextComponent>
          </View>
        )}
      </View>
    </View>
  );
};

export default ElegantHeader;
