import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import ElegantHeader from "./lib/ElegantHeader";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ElegantHeader
        title="Welcome"
        enableBackButton
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique fermentum magna, porttitor vulputate arcu dapibus et."
      />
    </SafeAreaView>
  );
};

export default App;
