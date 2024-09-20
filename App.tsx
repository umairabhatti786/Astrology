import {

  LogBox,

} from "react-native";
import React from "react";
import RootNavigator from "./src/routes";
LogBox.ignoreLogs(["VirtualizedLists", "Warning:..."]);
LogBox.ignoreAllLogs();
const App = () => {
  return <RootNavigator />;
};

export default App;
