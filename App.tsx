import { FC } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { MainScreen } from "./src/screens";

const App: FC = () => {
  const { height } = useWindowDimensions();

  const paddingTop = height < 380 ? 30 : 60;

  return (
    <View style={[styles.container, { paddingTop, paddingBottom: 40 }]}>
      <StatusBar style="light" />
      <MainScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
