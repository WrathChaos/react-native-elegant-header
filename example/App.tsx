import React from "react";
import { SafeAreaView } from "react-native";
import ElegantHeader from "react-native-elegant-header";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ElegantHeader
        title="Welcome"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique fermentum magna, porttitor vulputate arcu dapibus et."
        enableBackButton
        onPress={() => {}}
      />
    </SafeAreaView>
  );
};

export default App;
